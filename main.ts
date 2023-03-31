import {
  bold,
  brightBlue,
  brightGreen,
  brightMagenta,
  brightYellow,
  red,
} from "https://deno.land/std@0.181.0/fmt/colors.ts";
import { wait } from "https://deno.land/x/wait@0.1.12/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";

// deno-lint-ignore no-inferrable-types
const BASE_URL: string = "https://criscore.deno.dev/";
//const parsedArgs = parse(args);
const pre = brightGreen(bold("›"));

await new Command()
  .name("cricket")
  .description(
    "Live Cricket Score CLI - Get Live Cricket Score Update on your Terminal and CMD.",
  )
  .version("v0.0.3")
  .meta("deno", Deno.version.deno)
  .meta("v8", Deno.version.v8)
  .meta("typescript", Deno.version.typescript)
  .example(
    "Get Live Cricket Match Score from ID",
    `cricket -m 123456`,
  )
  .option("-i, --info", "About Cricket CLI", { required: true })
  .allowEmpty()
  .action(function ({ info }) {
    if (!info) {
      this.showHelp();
      return;
    }
    console.log(brightMagenta(bold(`+-+-+-+-+-+-+-+ +-+-+-+-+-+
|C|r|i|c|k|e|t| |S|c|o|r|e|
+-+-+-+-+-+-+-+ +-+-+-+-+-+                                           
Live Cricket Score CLI - Get Live Cricket Score Update on your Terminal and CMD\nCricket Score API - https://github.com/mskian/deno-cricket-api\nBuild and Developed by Santhosh Veer`)));
  })
  .option("-l, --live", "Get Current Live Cricket Match Score", {
    standalone: true,
    //required: true,
    action: async () => {
      const spinner = wait("Fetching Score Data...").start();
      const res = await fetch(`${BASE_URL}live`);
      const data = await res.json();
      if (data.current !== "Data Not Found") {
        spinner.stop();
        console.log(`\n${pre}`, brightMagenta(bold(data.title)));
        console.log(`\n${pre}`, brightYellow(bold(data.update)));
        console.log(
          `\n${pre}`,
          brightMagenta(bold("Live Score:")),
          brightGreen(bold(data.current)),
        );
        console.log(
          `\n${pre}`,
          brightMagenta(bold("Run Rate:")),
          brightBlue(bold(data.runrate)),
        );
        console.log(
          `\n${pre}`,
          brightMagenta(bold("Current Batsman:")),
          brightGreen(bold(data.batsman)),
          brightMagenta(bold("Runs")),
          brightGreen(bold(data.batsmanrun)),
          "-",
          brightGreen(bold(data.ballsfaced)),
          brightMagenta(bold("balls")),
        );
        console.log(
          `\n${pre}`,
          brightMagenta(bold("Current Bowler:")),
          brightGreen(bold(data.bowler)),
          brightGreen(bold(data.bowlerover)),
          brightMagenta(bold("over")),
          brightGreen(bold(data.bowlerruns)),
          brightMagenta(bold("run and")),
          brightGreen(bold(data.bowlerwickets)),
          brightMagenta(bold("wicket")),
        );
        console.log(
          `\n${pre}`,
          brightMagenta(bold("Other Batsman:")),
          brightGreen(bold(data.batsmantwo)),
          brightMagenta(bold("Runs")),
          brightGreen(bold(data.batsmantworun)),
          "-",
          brightGreen(bold(data.batsmantwoballsfaced)),
          brightMagenta(bold("balls")),
        );
        console.log(
          `\n${pre}`,
          brightMagenta(bold("Other Bowler:")),
          brightGreen(bold(data.bowlertwo)),
          brightGreen(bold(data.bowletworover)),
          brightMagenta(bold("over")),
          brightGreen(bold(data.bowlertworuns)),
          brightMagenta(bold("run and")),
          brightGreen(bold(data.bowlertwowickets)),
          brightMagenta(bold("wicket")),
        );
        console.log("\n");
      } else {
        spinner.stop();
        const errorMsg = red(
          `${red(bold("Sorry Currently No Live Match"))}`,
        );
        console.log(errorMsg);
      }
    },
  })
  .option(
    "-m, --match <matchID>",
    "Get Live Match Score by Entering Cricbuzz Live Match Score ID (You can Get it from URL)",
    {
      standalone: true,
      action: async ({ match }) => {
        const spinner = wait("Fetching Score Data...").start();
        const getMatchNumber = match;
        if (getMatchNumber) {
          const res = await fetch(
            `${BASE_URL}match/${getMatchNumber}`,
          );
          const data = await res.json();
          if (data.current !== "Data Not Found") {
            spinner.stop();
            console.log(`\n${pre}`, brightMagenta(bold(data.title)));
            console.log(`\n${pre}`, brightYellow(bold(data.update)));
            console.log(
              `\n${pre}`,
              brightMagenta(bold("Live Score:")),
              brightGreen(bold(data.current)),
            );
            console.log(
              `\n${pre}`,
              brightMagenta(bold("Run Rate:")),
              brightBlue(bold(data.runrate)),
            );
            console.log(
              `\n${pre}`,
              brightMagenta(bold("Current Batsman:")),
              brightGreen(bold(data.batsman)),
              brightMagenta(bold("Runs")),
              brightGreen(bold(data.batsmanrun)),
              "-",
              brightGreen(bold(data.ballsfaced)),
              brightMagenta(bold("balls")),
            );
            console.log(
              `\n${pre}`,
              brightMagenta(bold("Current Bowler:")),
              brightGreen(bold(data.bowler)),
              brightGreen(bold(data.bowlerover)),
              brightMagenta(bold("over")),
              brightGreen(bold(data.bowlerruns)),
              brightMagenta(bold("run and")),
              brightGreen(bold(data.bowlerwickets)),
              brightMagenta(bold("wicket")),
            );
            console.log(
              `\n${pre}`,
              brightMagenta(bold("Other Batsman:")),
              brightGreen(bold(data.batsmantwo)),
              brightMagenta(bold("Runs")),
              brightGreen(bold(data.batsmantworun)),
              "-",
              brightGreen(bold(data.batsmantwoballsfaced)),
              brightMagenta(bold("balls")),
            );
            console.log(
              `\n${pre}`,
              brightMagenta(bold("Other Bowler:")),
              brightGreen(bold(data.bowlertwo)),
              brightGreen(bold(data.bowletworover)),
              brightMagenta(bold("over")),
              brightGreen(bold(data.bowlertworuns)),
              brightMagenta(bold("run and")),
              brightGreen(bold(data.bowlertwowickets)),
              brightMagenta(bold("wicket")),
            );
            console.log("\n");
          } else {
            spinner.stop();
            const errorMsg = red(
              `${red(bold("Sorry Currently No Live Match"))}`,
            );
            console.log(errorMsg);
          }
        }
      },
    },
  )
  .parse();
