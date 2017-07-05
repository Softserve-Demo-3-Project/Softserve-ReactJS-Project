import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'registration',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Register = require('./containers/RegisterContainer').default
      const reducer = require('./modules/register').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'user', reducer })

      /*  Return getComponent   */
      cb(null, Register)

    /* Webpack named bundle   */
    }, 'register')
  }
})
