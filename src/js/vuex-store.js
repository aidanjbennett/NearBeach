// import Vuex from 'vuex';
import {createStore} from "vuex";

import {moduleArchiveCards} from "./vuex/archiveCardsVueX";
import {moduleCard} from "./vuex/cardVueX";
import {moduleChangeTask} from "./vuex/changeTaskVueX";
import {moduleDestination} from "./vuex/destinationVueX";
import {moduleGroupsAndUsers} from "./vuex/groupAndUsersVueX";
import {moduleKanban} from "./vuex/kanbanVueX";
import {moduleObjectLink} from "./vuex/objectLinkVueX";
import {moduleRfc} from "./vuex/rfcVueX";
import {moduleToasts} from "./vuex/toastsVueX";
import {moduleUrl} from "./vuex/urlVueX";
import {moduleUserLevel} from "./vuex/userLevelVueX";


// User settings
import {kanbanSettings} from "./vuex/usersettings/kanbanSettingsVueX";
import {themeSettings} from "./vuex/usersettings/themeSettingsVueX";

export const store = createStore({
    modules: {
        archiveCards: moduleArchiveCards,
        card: moduleCard,
        changeTask: moduleChangeTask,
        destination: moduleDestination,
        groupsAndUsers: moduleGroupsAndUsers,
        kanban: moduleKanban,
        objectLink: moduleObjectLink,
        rfc: moduleRfc,
        toasts: moduleToasts,
        url: moduleUrl,
        userLevel: moduleUserLevel,

        //User Settings
        kanbanSettings: kanbanSettings,
        themeSettings: themeSettings,
    },
});
