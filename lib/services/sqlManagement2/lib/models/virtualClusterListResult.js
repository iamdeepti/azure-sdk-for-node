/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A list of virtual clusters.
 */
class VirtualClusterListResult extends Array {
  /**
   * Create a VirtualClusterListResult.
   * @property {string} [nextLink] Link to retrieve next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualClusterListResult
   *
   * @returns {object} metadata of VirtualClusterListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualClusterListResult',
      type: {
        name: 'Composite',
        className: 'VirtualClusterListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualClusterElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualCluster'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualClusterListResult;