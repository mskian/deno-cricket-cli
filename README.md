# Cricket CLI

[![Test CLI](https://github.com/mskian/deno-cricket-cli/actions/workflows/test.yml/badge.svg)](https://github.com/mskian/deno-cricket-cli/actions/workflows/test.yml)
![Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)

Live Cricket Score CLI - Get Live Cricket Score Update on your Terminal and
CMD - Build using Deno.

## Prerequisites

- Deno on your System <https://deno.land/#installation>

## Features

- Get Current Live Cricket Match Score
- Get Live Match Score by Entering Cricbuzz Live Match Score ID (You can Get it
  from URL)

## Usage

- Clone or Download the Repo

```sh
git clone https://github.com/mskian/deno-cricket-cli.git
cd deno-cricket-cli
```

- Run the CLI without installation

```sh
# Get Current Live Cricket Match Score
deno run --allow-net --allow-read main.ts -l

(or)

deno task live

# Get Live Match Score by Entering Cricbuzz Live Match Score ID (You can Get it from URL)
deno run --allow-net --allow-read main.ts -m 123456

(or)

deno task match 123456

# Help Section
deno run --allow-net --allow-read main.ts -h

(or)

deno task help
```

- install via Deno Modules - <https://deno.land/x/cricket>
- Learn about deno Script installer -
  <https://deno.land/manual/tools/script_installer>

```sh
deno install --allow-net --name cricket https://deno.land/x/cricket/main.ts
```

- install CLI via Cloned repo or download (For Development)

```sh
deno install --allow-net --name cricket main.ts
```

```sh
# Get Current Live Cricket Match Score
cricket -l

# Get Live Match Score by Entering Cricbuzz Live Match Score ID (You can Get it from URL)
cricket -m 123456

# Help Section
cricket -h
```

## uninstall

```sh
deno uninstall cricket
```

- Use directly without download or install Locally by using `deno.land` or
  `nest.land`

```sh
deno run --allow-net https://deno.land/x/cricket/main.ts -l
deno run --allow-net https://deno.land/x/cricket/main.ts -m 123456
deno run --allow-net https://deno.land/x/cricket/main.ts -h
```

```sh
deno run --allow-net https://x.nest.land/deno-cricket-cli@0.0.3/main.ts -l
deno run --allow-net https://x.nest.land/deno-cricket-cli@0.0.3/main.ts -m 123456
deno run --allow-net https://x.nest.land/deno-cricket-clii@0.0.3/main.ts -h
```

## Credits

- Build CLI Tool with Deno and Cliffy - <https://cliffy.io/>
- Cricket API (Deno) - <https://github.com/sanwebinfo/deno-cricket-api>
- Cricket API (Node JS) - <https://github.com/sanwebinfo/cricket-api-nodejs>
- Cricket CLI Node.js - <https://github.com/mskian/cricket-cli>

## LICENSE

MIT
