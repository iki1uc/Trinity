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

    Pipeline: {
        pipe0: ["A", "C", "E"],
        pipe1: ["D", "F"],
        pipe2: ["B", "G", "H"],

        run(pipeNumber) {
            const order = {
                1: ["pipe1", "pipe0", "pipe2"]
            };

            const sequence = order[pipeNumber];

            sequence.forEach(pipe => {
                this[pipe].forEach(step => {
                    console.log("RUN:", step);

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
