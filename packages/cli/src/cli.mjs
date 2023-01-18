import factory from 'yargs/yargs'

export default function cli(cwd) {
  const parser = factory(null, cwd)

  parser.alias('h', 'help')
  parser.alias('v', 'version')

  parser.usage('$0', 'TODO: description', (yargs) => {
    yargs.options({
      // TODO: options
    })
  })
  return parser
}
