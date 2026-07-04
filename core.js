import { SCAN } from "../SCAN/zum.js";

export const TrinityCore = {
    piOP,
    PRM,

    modi: {
        fn: {
            SCAN
        },

        add(name, handler) {
            this.fn[name] = handler;
        },

        run(name, input) {
            return this.fn[name]?.(input);
        }
    },

    RAWATOR,

    nameLage: {
        name: "Trinity",
        lage: {
            Micro: "piOP",
            Parameter: "PRM (-2-)",
            Funktion: "modi",
            Worker: "RAWATOR",
            Funktionsmodul: "SCAN"
        },
        status: "NC-Startbereit",
        stabilitaet: 0.95
    }
};
