// Vitest
import { describe, expect, test } from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";

// Import vue component
import BugsModule from "/src/js/components/modules/sub_modules/BugsModule.vue";

// VueX
import { store } from "/src/js/vuex-store";

// Axios
const axios = require("axios");

describe(' BugsModule.vue - rendering component', () => {
    //Using mount - insert data
    const wrapper = mount(BugsModule, {
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