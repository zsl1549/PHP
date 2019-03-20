OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Неуспело чишћење мапирања.",
    "Failed to delete the server configuration" : "Неуспело брисање конфигурације сервера",
    "Invalid configuration: Anonymous binding is not allowed." : "Неисправна конфигурација: Анонимно везивање није дозвољено.",
    "Valid configuration, connection established!" : "Исправна конфигурација, веза успостављена!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Исправна конфигурација, али везивање није успело. Проверите поставке сервера и акредитиве.",
    "Invalid configuration. Please have a look at the logs for further details." : "Неисправна конфигурација. Погледајте дневник за више детаља.",
    "No action specified" : "Није наведена радња",
    "No configuration specified" : "Није наведена постава",
    "No data specified" : "Нису наведени подаци",
    " Could not set configuration %s" : "Нисам могао да подесим конфигурацију %s",
    "Action does not exist" : "Радња не постоји",
    "LDAP user and group backend" : "Позадински мотор за LDAP корисника и групу",
    "Renewing …" : "Обнављам …",
    "Very weak password" : "Веома слаба лозинка",
    "Weak password" : "Слаба лозинка",
    "So-so password" : "Осредња лозинка",
    "Good password" : "Добра лозинка",
    "Strong password" : "Јака лозинка",
    "The Base DN appears to be wrong" : "Базни ДН је изгледа погрешан",
    "Testing configuration…" : "Тестирам конфигурацију…",
    "Configuration incorrect" : "Конфигурација је неисправна",
    "Configuration incomplete" : "Конфигурација није комплетна",
    "Configuration OK" : "Конфигурација је у реду",
    "Select groups" : "Изаберите групе",
    "Select object classes" : "Изаберите класе објеката",
    "Please check the credentials, they seem to be wrong." : "Проверите акредитиве. Изгледа да су погрешни.",
    "Please specify the port, it could not be auto-detected." : "Наведите порт. Не може се аутоматски открити.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Базни ДН се не може открити. Проверите акредитиве, домаћина и порт.",
    "Could not detect Base DN, please enter it manually." : "Не могу да откријем базни ДН. Унесите га ручно.",
    "{nthServer}. Server" : "{nthServer}. Сервер",
    "No object found in the given Base DN. Please revise." : "Нема објекта за дати базни ДН. Проверите.",
    "More than 1,000 directory entries available." : "Више од 1000 уноса је доступно.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} унос доступан за дати базни ДН","{objectsFound} уноса доступно за дати базни ДН","{objectsFound} уноса доступно за дати базни ДН"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Грешка. Проверите базни ДН као и поставке везе и акредитиве.",
    "Do you really want to delete the current Server Configuration?" : "Да ли стварно желите да обришете тренутну конфигурацију сервера?",
    "Confirm Deletion" : "Потврдa брисањa",
    "Mappings cleared successfully!" : "Мапирања успешно очишћена!",
    "Error while clearing the mappings." : "Грешка при чишћењу мапирања.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Анонимно везивање није дозвољено. Дајте кориснички ДН и лозинку.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Грешка LDAP радње. Анонимна веза можда није дозвољена.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Упис није успео. Проверите да је база у функцији. Поново учитајте пре настављања.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Пребацивање режима укључиће аутоматске LDAP упите. Зависно од LDAP величине то може потрајати. Заиста желите да промените режим?",
    "Mode switch" : "Промена режима",
    "Select attributes" : "Изаберите атрибуте",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Корисник није нађен. Проверите атрибуте пријаве и корисничко име. Ефективни филтер (да копирате и налепите за верификацију у конзоли):<br/>",
    "User found and settings verified." : "Корисник нађен и поставке проверене.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Размислите и да смањите претрагу, пошто обухвата много корисника, од којих ће само први моћи да се пријави.",
    "An unspecified error occurred. Please check log and settings." : "Десила се непозната грешка. Погледајте дневник и подешавања.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Филтер претраге је неисправан, вероватно због синтаксе попут неједнаког броја отворених и затворених заграда. Проверите.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Дошло је до грешке LDAP / AD везе. Проверите домаћина, порт и акредитиве.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "„%uid“ резервисано поље недостаје. Биће замењено са корисничким именом када се ради упит над LDAP / AD-ом.",
    "Please provide a login name to test against" : "Наведите пријавно име за тест са",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Поље групе је искључено јер LDAP / AD сервер не подржава припадност групи.",
    "Password change rejected. Hint: " : "Промена лозинке није прихваћена. Смерница:",
    "Please login with the new password" : "Пријавите се са новом лозинком",
    "Your password will expire tomorrow." : "Ваша лозинка ће истећи сутра.",
    "Your password will expire today." : "Ваша лозинка ће истећи данас.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Ваша лозинка ће истећи за %n дан.","Ваша лозинка ће истећи за %n дана.","Ваша лозинка ће истећи за %n дана."],
    "LDAP / AD integration" : "LDAP / AD интеграција",
    "_%s group found_::_%s groups found_" : ["нађена %s група","нађене %s групе","Нађено %s група"],
    "_%s user found_::_%s users found_" : ["нађен %s корисник","нађена %s корисника","Нађено %s корисника"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Не могу да пронађем атрибут имена за приказ корисника. Молимо сами га наведите у LDAP напредним подешавањима.",
    "Could not find the desired feature" : "Не могу да пронађем жељену особину",
    "Invalid Host" : "Неисправан домаћин",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Ова апликација омогућава администраторима да повежу Некстклауд на LDAP-базирани кориснички директоријум",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Ова апликација омогућава администраторима да повежу Некстклауд на LDAP-базирани кориснички директоријум за проверу идентитета и прављење корисника, група и корисничких атрибута. Администратори могу да подесе повезивање ове апликације са једним или више LDAP директоријума или Active Directories преко LDAP интерфејса. Атрибути, као што су корисничка квота, адреса е-поште, аватар слика, припадност групама и остало се могу повући у Некстклауд из директоријума преко одговарајућих упита и филтера.\n\nКорисник се пријављује у Некстклауд преко својих LDAP или AD акредитива и одобрава му се приступ према захтеву за проверу идентитета  којима управљају LDAP или AD сервери. Некстклауд не складишти LDAP и AD лозинке, него се само ови акредитиви користе за проверу идентитета корисника и на даље Некстклауд користи сесију као ID корисника. Више информација је доступно у документацији LDAP кориснички и групни позадински мотор.",
    "Test Configuration" : "Испробај поставку",
    "Help" : "Помоћ",
    "Groups meeting these criteria are available in %s:" : "Групе које испуњавају ове критеријуме су доступне у %s:",
    "Only these object classes:" : "Само ове класе објеката:",
    "Only from these groups:" : "Само из ових група:",
    "Search groups" : "Претражи групе",
    "Available groups" : "Доступне групе",
    "Selected groups" : "Изабране групе",
    "Edit LDAP Query" : "Уреди LDAP упит",
    "LDAP Filter:" : "LDAP филтер:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Филтер прецизира које ће LDAP групе требају имати приступ %s случају.",
    "Verify settings and count the groups" : "Верификуј поставке и преброј групе",
    "When logging in, %s will find the user based on the following attributes:" : "При пријављивању, %s ће пронаћи корисника на основу следећих атрибута:",
    "LDAP / AD Username:" : "LDAP / AD корисничко име:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Дозволи пријављивање преко LDAP / AD корисничког имена, које је или „uid“ или „sAMAccountName“ и биће детектовано.",
    "LDAP / AD Email Address:" : "LDAP / AD адреса е-поште:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Дозволи пријављивање преко атрибута адресе е-поште. „mail“ и „mailPrimaryAddress“ су дозвољени.",
    "Other Attributes:" : "Остали атрибути:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Дефинише филтер који ће се применити, када се покуша пријава. „%%uid“ замењује корисничко име у пријави. Пример: „uid=%%uid“",
    "Test Loginname" : "Испробај име за пријаву",
    "Verify settings" : "Провери поставке",
    "%s. Server:" : "%s. Сервер:",
    "Add a new configuration" : "Додај нову поставку",
    "Copy current configuration into new directory binding" : "Копирај тренутну поставу у везивање новог директоријума",
    "Delete the current configuration" : "Обриши тренутне поставке",
    "Host" : "Домаћин",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Можете да изоставите протокол, осим ако не захтевате SSL. Ако је потребан, почните са ldaps://",
    "Port" : "Порт",
    "Detect Port" : "Откриј порт",
    "User DN" : "Корисников DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN корисника клијента са којим треба да се успостави веза, нпр. uid=agent,dc=example,dc=com. За анониман приступ, оставите поља DN и лозинка празним.",
    "Password" : "Лозинка",
    "For anonymous access, leave DN and Password empty." : "За анониман приступ, оставите поља DN и лозинка празним.",
    "Save Credentials" : "Сачувај акредитиве",
    "One Base DN per line" : "Један Base DN по линији",
    "You can specify Base DN for users and groups in the Advanced tab" : "Можете навести Base DN за кориснике и групе у картици Напредно",
    "Detect Base DN" : "Откриј Base DN",
    "Test Base DN" : "Тестирај Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избегава аутоматске LDAP захтеве. Боље за веће поставке, али тражи мало више познавања LDAP-а.",
    "Manually enter LDAP filters (recommended for large directories)" : "Унесите ручно LDAP филтере (препоручено за велике директоријуме)",
    "Listing and searching for users is constrained by these criteria:" : "Излиставање и претраживање корисника је ограничено следећим условима:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Најчешће класе објеката за кориснике су organizationalPerson, person, user и inetOrgPerson. Ако нисте сигурни шта да изаберете, питајте администратора именика.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Филтер одређује који ЛДАП корисници ће имати приступ на %s.",
    "Verify settings and count users" : "Провери поставке и преброј кориснике",
    "Saving" : "Снимам",
    "Back" : "Назад",
    "Continue" : "Настави",
    "Please renew your password." : "Молимо обновите Вашу лозинку.",
    "An internal error occurred." : "Догодила се интерна грешка.",
    "Please try again or contact your administrator." : "Покушајте поново или контактирајте администратора.",
    "Current password" : "Тренутна лозинка",
    "New password" : "Нова лозинка",
    "Renew password" : "Обнови лозинку",
    "Wrong password." : "Лоша лозинка.",
    "Cancel" : "Одустани",
    "Server" : "Сервер",
    "Users" : "Корисници",
    "Login Attributes" : "Атрибути пријаве",
    "Groups" : "Групе",
    "Expert" : "Стручњак",
    "Advanced" : "Напредно",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Упозорење:</b> PHP LDAP модул није инсталиран и зачеље неће радити. Питајте систем администратора да га инсталира.",
    "Connection Settings" : "Поставке везе",
    "Configuration Active" : "Конфигурација активна",
    "When unchecked, this configuration will be skipped." : "Када није штриклирано, ова конфигурација ће бити прескочена.",
    "Backup (Replica) Host" : "Домаћин Резервне копије (Реплике)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Наведите опционог домаћина за резервне копије. Он мора бити реплика главног LDAP/AD сервера.",
    "Backup (Replica) Port" : "Порт Резервне копије (Реплике)",
    "Disable Main Server" : "Онемогући главни сервер",
    "Only connect to the replica server." : "Повезано само на сервер за копирање.",
    "Turn off SSL certificate validation." : "Искључите потврду SSL сертификата.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Није препоручено, користите само за тестирање! Ако веза ради само са овом опцијом, увезите SSL сертификате LDAP сервера на ваш %s сервер.",
    "Cache Time-To-Live" : "Трајност кеша",
    "in seconds. A change empties the cache." : "у секундама. Промена празни кеш меморију.",
    "Directory Settings" : "Подешавања директоријума",
    "User Display Name Field" : "Име приказа корисника",
    "The LDAP attribute to use to generate the user's display name." : "LDAP атрибут за стварање имена за приказ корисника.",
    "2nd User Display Name Field" : "2. поље за приказ имена корисника",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Опционо. LDAP атрибут који се додаје на име у заградама. Коначно име за приказ ће бити нешто попут »Петар Петровић (pera@example.org)«.",
    "Base User Tree" : "Основно стабло корисника",
    "One User Base DN per line" : "Један Корисников јединствени назив DN по линији",
    "User Search Attributes" : "Параметри претраге корисника",
    "Optional; one attribute per line" : "Опционо; један параметар по линији",
    "Group Display Name Field" : "Име приказа групе",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP параметар за формирање имена за приказ група.",
    "Base Group Tree" : "Стабло основне групе",
    "One Group Base DN per line" : "Један Групни јединствени назив DN по линији",
    "Group Search Attributes" : "Параметри претраге група",
    "Group-Member association" : "Придруживање чланова у групу",
    "Dynamic Group Member URL" : "Динамична адреса члана групе",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "LDAP атрибут који на групном објекту садржи адресу LDAP претраге којом се одређује да ли објекат припада групи. (празно подешавање искључује могућност динамичких припадности групама.) ",
    "Nested Groups" : "Угнеждене групе",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Када је укључено, подржане су групе унутар групе. (Ради само ако особина члана групе садржи DN-ове.)",
    "Paging chunksize" : "Величина делића странице",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Величина делића се користи за страничење ЛДАП претрага које могу вратити гомилу резултата попут набрајања корисника или група. (постављање на 0 у таквим ситуацијама искључује приказ претраге по страницама)",
    "Enable LDAP password changes per user" : "Укључи промену LDAP лозинке по кориснику",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Дозволи LDAP корисницима да мењају своју лозинку и дозволи супер администраторима и администраторима група да мењају лозинке њихових LDAP корисника. Ради само када је контрола права приступа подешена према LDAP серверу. Пошто се лозинке шаљу као обичан тест ка LDAP серверу, мора се користити протокол са шифровањем, као и укључивање хеширања на LDAP серверу.",
    "(New password is sent as plain text to LDAP)" : "(нова лозинка се шаље као обичан текст на LDAP)",
    "Default password policy DN" : "Подразумевана политика промене DN лозинки",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Подразумевана политика промене лозинки ће се користити када лозинка истиче. Може се користити само када се укључи промена лозинке по кориснику и подржава је само OpenLDAP. Оставите празно да искључите шта се дешава када лозинка истиче.",
    "Special Attributes" : "Посебни параметри",
    "Quota Field" : "Поље квоте",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Оставите празно за подразумевану квоту корисника. У супротном, ставите LDAP/AD атрибут.",
    "Quota Default" : "Подразумевана квота",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Редефинише подразумевану квоту за LDAP кориснике који немају постављену квоту у Quota пољу.",
    "Email Field" : "Поље адресе е-поште",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Поставља адресу е-поште корисника из LDAP атрибута. Оставите празно за подразумевано понашање.",
    "User Home Folder Naming Rule" : "Правило именовања корисничке фасцикле",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Оставите празно за корисничко име (подразумевано). У супротном, наведите особину LDAP/AD.",
    "\"$home\" Placeholder Field" : "Резервисано место за поље „$home“",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home ће се у подешавању спољног складишта заменити са вредношћу задатог атрибута",
    "Internal Username" : "Интерно корисничко име:",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Подразумевано се интерно корисничко име креира од UUID атрибута. Тиме се гарантује да се корисничко име јединствено и да карактери не морају да се конвертују. Интерно корисничко име има ограничења да су дозвољени само следећи карактери: [ a-zA-Z0-9_.@- ]. Остали карактери ће или бити замењени ASCII еквивалентима или ће бити прескочени. Ако се деси поклапање са постојећим корисничким именом, додаће се број на крај имена. Интерно корисничко име се користи да идентификује корисника интерно. Такође се користи и као подразумевано име за име корисничку фасцикле, а и део је удаљених адреса, нпр. свих *DAV сервиса. Уз помоћ овог подешавања, може да се промени подразумевано понашање. Оставите га празним за подразумевано понашање. Промене ће се тицати само новомапираних (додатих) LDAP корисника.",
    "Internal Username Attribute:" : "Интерни параметри корисничког имена:",
    "Override UUID detection" : "Прескочи UUID откривање",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Подразумевано, атрибут UUID се аутоматски детектује. Атрибут UUID се користи за сигурну идентификацију LDAP корисника и група. Такође, локално корисничко име ће бити креирано на основу UUID-a, ако није другачије назначено. Можете заобићи поставке и проследити други атрибут по вашем избору. Морате бити сигурни да је изабрани атрибут јединствен и да га корисници и групе могу преносити. Оставите празно за подразумевано понашање. Промене ће имати дејство само на новомапираним (доданим) LDAP корисницима и групама.",
    "UUID Attribute for Users:" : "UUID параметри за кориснике:",
    "UUID Attribute for Groups:" : "UUID параметри за групе:",
    "Username-LDAP User Mapping" : "Username-LDAP мапирање корисника",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Корисничка имена се користи за чување и додељивање метаподатака. Да би се прецизно идентификовали и препознавали кориснике, сваки LDAP корисник ће имати локално корисничко име. Ово захтева мапирање од корисничког имена до LDAP корисника. Креирано корисничко име се мапира у UUID LDAP корисника. Поред тога, DN се кешира да смањи LDAP интеракцију, али се не користи за идентификацију. Ако се DN мења, промене се могу наћи. Локално корисничко име се користи свуда. Чишћење мапирања оставља свуда остатке. Чишћење мапирања није осетљиво на конфигурацију, оно утиче на све LDAP конфигурације!  Никада не користит чишћење мапирања у радном окружењу, већ само у тестирању или експерименталној фази.",
    "Clear Username-LDAP User Mapping" : "Очисти Username-LDAP мапирање корисника",
    "Clear Groupname-LDAP Group Mapping" : "Очисти Groupname-LDAP мапирање група",
    " entries available within the provided Base DN" : "уноса доступно за дати базни ДН",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Корисничка имена се користи за чување и додељивање (мета) података. Да би се прецизно идентификовали и препознавали кориснике, сваки LDAP корисник ће имати локално корисничко име. Ово захтева мапирање од корисничког имена до LDAP корисника. Креирано корисничко име се мапира у UUID LDAP корисника. Поред тога, DN се кешира да смањи LDAP интеракцију, али се не користи за идентификацију. Ако се DN мења, промене се могу наћи. Локално корисничко име се користи свуда. Чишћење мапирања оставља свуда остатке. Чишћење мапирања није осетљиво на конфигурацију, оно утиче на све LDAP конфигурације!  Никада не користит чишћење мапирања у радном окружењу, већ само у тестирању или експерименталној фази."
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
