// Vitest
import { describe, expect, test } from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";

// Import vue component
import AddUserWizard from "/src/js/components/modules/wizards/AddUserWizard.vue";

// VueX
import { store } from "/src/js/vuex-store";

// Axios
const axios = require("axios");

describe('AddUserWizard.vue - rendering component', () => {
    //Using mount - insert data
    const wrapper = mount(AddUserWizard, {
        props: {},
        global: {
            plugins: [store],
            mocks: {
                axios,
            }
        },
    });

    test('Empty test', () => {});
})
