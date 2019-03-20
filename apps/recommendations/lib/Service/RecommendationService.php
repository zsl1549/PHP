<?php

declare(strict_types=1);

/**
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\Recommendations\Service;

use function array_merge;
use function array_reduce;
use function array_slice;
use OCP\IPreview;
use OCP\IUser;
use function usort;

class RecommendationService {

	const MAX_RECOMMENDATIONS = 5;

	/** @var IRecommendationSource */
	private $sources;

	/** @var IPreview */
	private $previewManager;

	public function __construct(RecentlyCommentedFilesSource $recentlyCommented,
								RecentlyEditedFilesSource $recentlyEdited,
								RecentlySharedFilesSource $recentlyShared,
								IPreview $previewManager) {
		$this->sources = [
			$recentlyCommented,
			$recentlyEdited,
			$recentlyShared,
		];
		$this->previewManager = $previewManager;
	}

	/**
	 * @param IRecommendation[] $recommendations
	 *
	 * @return IRecommendation[]
	 */
	private function sortRecommendations(array $recommendations): array {
		usort($recommendations, function (IRecommendation $a, IRecommendation $b) {
			return $b->getTimestamp() - $a->getTimestamp();
		});

		return $recommendations;
	}

	/**
	 * @param IRecommendation[] $recommendations
	 *
	 * @return IRecommendation[]
	 */
	private function addPreviews(array $recommendations): array {
		foreach ($recommendations as $recommendation) {
			if ($this->previewManager->isAvailable($recommendation->getNode())) {
				$recommendation->setHasPreview(true);
			}
		}
		return $recommendations;
	}

	/**
	 * @param IUser $user
	 *
	 * @return IRecommendation[]
	 */
	public function getRecommendations(IUser $user, int $max = self::MAX_RECOMMENDATIONS): array {
		$all = array_reduce($this->sources, function (array $carry, IRecommendationSource $source) use ($user) {
			return array_merge($carry, $source->getMostRecentRecommendation($user, self::MAX_RECOMMENDATIONS));
		}, []);

		$sorted = $this->sortRecommendations($all);
		$topX = array_slice($sorted, 0, $max);

		return $this->addPreviews($topX);
	}

}
