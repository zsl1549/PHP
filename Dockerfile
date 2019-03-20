FROM barnett/nextcloud-runtime:0.2

ENV NEXTCLOUD_VERSION 15.0.5

ADD . /usr/src/nextcloud
RUN mkdir -p /usr/src/nextcloud/data; \
    mkdir -p /usr/src/nextcloud/custom_apps; \
    chmod +x /usr/src/nextcloud/occ; \
    mv /usr/src/nextcloud/upgrade.exclude /upgrade.exclude; \
    mv /usr/src/nextcloud/entrypoint.sh /entrypoint.sh; \
    chmod +x /entrypoint.sh;   
VOLUME /var/www/html
ENTRYPOINT ["/entrypoint.sh"]
CMD ["apache2-foreground"]