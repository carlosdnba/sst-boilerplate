import StorageStack from './Storage'
import ApiStack from './Api'

export default app => {
  app.setDefaultFunctionProps({
    timeout: 30,
    runtime: 'nodejs12.x'
  })

  const storage = new StorageStack(app, 'storage')

  // Adding permission for all stacks to access the storage
  app.addDefaultFunctionPermissions([storage.table])

  const api = new ApiStack(app, 'api', {
    table: storage.table
  })
}
