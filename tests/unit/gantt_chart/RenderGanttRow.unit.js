// Vitest
import { describe, expect, test } from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";

// Import vue component
import BetweenDates from "/src/js/components/gantt_chart/RenderGanttRow.vue";

// VueX
import { store } from "/src/js/vuex-store";

describe('RenderGanttRow.vue - rendering component', () => {
    //Using mount - insert data
    const wrapper = mount(BetweenDates, {
        props: {
        },
        global: {
            plugins: [store],
        },
    });

    test('Empty test', () => {});
});
