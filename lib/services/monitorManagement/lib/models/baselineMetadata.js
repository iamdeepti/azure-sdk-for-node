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
 * Represents a baseline metadata value.
 *
 */
class BaselineMetadata {
  /**
   * Create a BaselineMetadata.
   * @property {string} name Name of the baseline metadata.
   * @property {string} value Value of the baseline metadata.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BaselineMetadata
   *
   * @returns {object} metadata of BaselineMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BaselineMetadata',
      type: {
        name: 'Composite',
        className: 'BaselineMetadata',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BaselineMetadata;