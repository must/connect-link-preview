const { getLinkPreview } = require('link-preview-js');

const platform = require('connect-platform');


/**
 *
 * lets define a new linkPreview node for the platform.
 *
 */
platform.core.node({
  path: '/linkPreview',
  public: false,
  method: 'GET',

  inputs: ['url'],
  outputs: ['data'],

  controlOutputs: [],

  hints: {
    /**
     *
     * this is the description of the node in general.
     *
     */
    node: 'fetches <span class="hl-blue">url</span> metadata.',

    /**
     *
     * these are the descriptions of each input value.
     *
     */
    inputs: {
      url: 'the url of the webpage to be fetched.',
    },

    /**
     *
     * these are the descriptions of possible output values.
     *
     */
    outputs: {
      data: 'the parsed metadata of the website with <span class="hl-blue">url</span>.'
    },

    /**
     *
     * these are the descriptions of possible control outputs.
     *
     */
    controlOutputs: {}
  }
},
  /**
   *
   * this function is the main logic of your node.
   * - 'inputs' is a dictionary of all given inputs.
   * - 'output' is a function you can use to output some data.
   *    it can be used like `output('x', data)` where 'x' is defined in
   *    possible output keys (see above).
   * - 'control' is a function you can use to end with a control output.
   *    it can be used like `control('x')` where 'x' is defined in
   *    possible control outputs (see above).
   *
   */
  (inputs, output, control) => {
    getLinkPreview(inputs.url)
    .then(
      (data) => {
        output('data', data);
      }
    );
  }
);
