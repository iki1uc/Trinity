export const TrinityCore = {

    piOP: {
        flags: { ready: true }
    },

    PRM: {
        params: { boot: 0 },
        set(key, val) { this.params[key] = val; }
    },

    modi: {
        fn: {
            ping: () => "pong",
            SCAN: {
                A: () => console.log("SCAN A"),
                B: () => console.log("SCAN B"),
                C: () => console.log("SCAN C"),
                D: () => console.log("SCAN D"),
                E: () => console.log("SCAN E"),
                F: () => console.log("SCAN F"),
                G: () => console.log("SCAN G"),
                H: () => console.log("SCAN H")
            }
        },

        add(name, handler) {
            this.fn[name] = handler;
        },

        run(name, input) {
            return this.fn[name]?.(input);
        }
    },

    RAWATOR: {
        active: false
    },

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
                    TrinityCore.modi.fn.SCAN[step]();
                });
            });
        }
    },

    module: {
        SCAN: "SCAN"
    }
};
