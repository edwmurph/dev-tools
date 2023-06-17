import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import * as commander from 'commander';
import figlet from 'figlet';

const pkg_json = JSON.parse( readFileSync('./package.json') );

function run_cmd({ bin, args = [] }) {
  execSync( `${ bin } ${ args.join(' ') }`, { stdio: 'inherit' } );
}

const program = new commander.Command();

program
  .name('dt')
  .version( pkg_json.version, '-v, --version', 'output the version' )
  .description('My collection of dev tools')
  .addHelpText( 'beforeAll', figlet.textSync( 'DT', { font: 'Speed' } ) );

program.command('invoke')
  .description('Synchronously invokes a lambda')
  .argument( '<function name>', 'Name of Lambda function to invoke' )
  .option( '-p, --payload [payload]', 'Path to JSON payload or raw JSON' )
  .action( ( function_name, options ) => {
    run_cmd({
      bin: './scripts/invoke.sh',
      args: [ function_name, options.payload ]
    });
  });

program.parse( process.argv );
