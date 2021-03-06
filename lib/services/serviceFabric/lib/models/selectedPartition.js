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
 * This class returns information about the partition that the user-induced
 * operation acted upon.
 *
 */
class SelectedPartition {
  /**
   * Create a SelectedPartition.
   * @property {string} [serviceName] The name of the service the partition
   * belongs to.
   * @property {uuid} [partitionId] An internal ID used by Service Fabric to
   * uniquely identify a partition. This is a randomly generated GUID when the
   * service was created. The partition ID is unique and does not change for
   * the lifetime of the service. If the same service was deleted and recreated
   * the IDs of its partitions would be different.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SelectedPartition
   *
   * @returns {object} metadata of SelectedPartition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SelectedPartition',
      type: {
        name: 'Composite',
        className: 'SelectedPartition',
        modelProperties: {
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          partitionId: {
            required: false,
            serializedName: 'PartitionId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SelectedPartition;
