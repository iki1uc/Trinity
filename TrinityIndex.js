import { TrinityCore } from "./core.js";

export const TrinityIndex = {

  init() {
    TrinityCore.PRM.set("boot", Date.now());
    TrinityCore.RAWATOR.active = true;
    this.output("System gestartet", this.status());
  },

  call(op, input) {
    const result = TrinityCore.modi.run(op, input);
    this.output(`Call: ${op}`, result);
    return result;
  },

  runPipeline(n) {
    TrinityCore.Pipeline.run(n);
    this.output("Pipeline", this.status());
  },

  status() {
    return {
      piOP: TrinityCore.piOP.flags,
      PRM: TrinityCore.PRM.params,
      modi: Object.keys(TrinityCore.modi.fn),
      RAWATOR: TrinityCore.RAWATOR.active
    };
  },

  output(title, data) {
    const el = document.getElementById("trinity-output");
    if (el) {
      el.innerText = `=== ${title} ===\n` +
        JSON.stringify(data, null, 2);
    }
  }
};
