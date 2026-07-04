import { SCAN } from "../SCAN/zum.js";

export const TrinityCore = {
    piOP,
    PRM,

    // FUNKTIONSACHSE
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

    // PIPELINE SYSTEM
    Pipeline: {
        pipe0: ["A", "C"],   // AX, IS
        pipe1: ["D"],        // SYT
        pipe2: ["B"],        // XA

        run(pipeNumber) {
            const order = {
                1: ["pipe1", "pipe0", "pipe2"]
            };

            const sequence = order[pipeNumber];

            sequence.forEach(pipe => {
                this[pipe].forEach(step => {
                    console.log("RUN:", step);

                    // SCAN-Funktionen ausführen
                    TrinityCore.modi.fn.SCAN[step]();
                });
            });
        }
    },

    nameLage: {
        name: "Trinity",
        lage: {
            Micro: "piOP",
            Parameter: "PRM (-2-)",
            Funktion: "modi",
            Worker: "RAWATOR",
            Funktionsmodul: "SCAN",
            Pipeline: "Pipeline"
        },
        status: "NC-Startbereit",
        stabilitaet: 0.95
    }
};
