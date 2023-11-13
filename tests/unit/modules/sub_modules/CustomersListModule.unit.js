// Vitest
import { describe, expect, test } from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";

// Import vue component
import CustomersListModule from "/src/js/components/modules/sub_modules/CustomersListModule.vue";

// VueX
import { store } from "/src/js/vuex-store";

// Axios
const axios = require("axios");

describe(' CustomersListModule.vue - rendering component', () => {
    //Using mount - insert data
    const wrapper = mount(CustomersListModule, {
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