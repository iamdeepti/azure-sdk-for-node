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
 * This type describes a gateway resource.
 *
 */
class GatewayResourceDescription {
  /**
   * Create a GatewayResourceDescription.
   * @property {string} name Name of the Gateway resource.
   * @property {string} [description] User readable description of the gateway.
   * @property {object} sourceNetwork Network the gateway should listen on for
   * requests.
   * @property {string} [sourceNetwork.name] Name of the network
   * @property {array} [sourceNetwork.endpointRefs] A list of endpoints that
   * are exposed on this network.
   * @property {object} destinationNetwork Network that the Application is
   * using.
   * @property {string} [destinationNetwork.name] Name of the network
   * @property {array} [destinationNetwork.endpointRefs] A list of endpoints
   * that are exposed on this network.
   * @property {array} [tcp] Configuration for tcp connectivity for this
   * gateway.
   * @property {array} [http] Configuration for http connectivity for this
   * gateway.
   * @property {string} [status] Status of the resource. Possible values
   * include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
   * @property {string} [statusDetails] Gives additional information about the
   * current status of the gateway.
   * @property {string} [ipAddress] IP address of the gateway. This is
   * populated in the response and is ignored for incoming requests.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GatewayResourceDescription
   *
   * @returns {object} metadata of GatewayResourceDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GatewayResourceDescription',
      type: {
        name: 'Composite',
        className: 'GatewayResourceDescription',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          sourceNetwork: {
            required: true,
            serializedName: 'properties.sourceNetwork',
            type: {
              name: 'Composite',
              className: 'NetworkRef'
            }
          },
          destinationNetwork: {
            required: true,
            serializedName: 'properties.destinationNetwork',
            type: {
              name: 'Composite',
              className: 'NetworkRef'
            }
          },
          tcp: {
            required: false,
            serializedName: 'properties.tcp',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TcpConfigElementType',
                  type: {
                    name: 'Composite',
                    className: 'TcpConfig'
                  }
              }
            }
          },
          http: {
            required: false,
            serializedName: 'properties.http',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HttpConfigElementType',
                  type: {
                    name: 'Composite',
                    className: 'HttpConfig'
                  }
              }
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          statusDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.statusDetails',
            type: {
              name: 'String'
            }
          },
          ipAddress: {
            required: false,
            readOnly: true,
            serializedName: 'properties.ipAddress',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GatewayResourceDescription;