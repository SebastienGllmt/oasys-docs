const sidebars = {
  whitepaper: [
    {
      type: 'autogenerated',
      dirName: 'whitepaper',
    },
  ],
  techdocs: [
    {
      type: 'category',
      label: "What's OASYS?", 
      link: {
        type: 'doc',
        id: 'tech-docs/whats-oasys/1-1-whats-oasys',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'GameFi Chain', 
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: [
            'tech-docs/whats-oasys/gamefi-chain/1-1-high-performance',
            'tech-docs/whats-oasys/gamefi-chain/1-2-decentralizaton-and-data-availability',
          ],
        },
        {
          type: 'category',
          label: 'What We Provide?', 
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: [
            'tech-docs/whats-oasys/what-we-provide/1-1-private-as-public',
          ],
        },
        {
          type: 'category',
          label: 'OASYS Architecture', 
          link: {
            type: 'doc',
            id: 'tech-docs/whats-oasys/oasys-architecture/1-1-oasys-architecture',
          },
          collapsed: false,
          items: [
            'tech-docs/whats-oasys/oasys-architecture/1-2-original-rollup',
            'tech-docs/whats-oasys/oasys-architecture/1-3-incentive-logic',
          ],
        },
        {
          type: 'category',
          label: 'Roadmap', 
          link: {
            type: 'doc',
            id: 'tech-docs/whats-oasys/roadmap/1-1-initial-functionalities',
          },
          collapsed: false,
          items: [],
        }, 
      ],
    }
  ],
  architecture: [
    {
      type: 'category',
      label: 'Overview', 
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'OASYS Architecture', 
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: [
            'architecture/overview/oasys-architecture/1-1-ecosystem-per-chain',
            'architecture/overview/oasys-architecture/1-2-original-rollup',
            'architecture/overview/oasys-architecture/1-3-flexible-token-design',
          ]
        }, {
          type: 'category',
          label: 'Permissioned Chain', 
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: [
            'architecture/overview/permissioned-chain/1-1-high-qualiry-database',
            'architecture/overview/permissioned-chain/1-2-efficient-load',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Hub Layer', 
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Consensus Algorithm', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/consensus/1-1-hub-consensus',
          },
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'DPoS', 
              link: {
                type: 'generated-index',
              },
              collapsed: false,
              items: [
                'architecture/hub-layer/consensus/dpos/1-1-weighted-random',
                'architecture/hub-layer/consensus/dpos/1-2-mining',
              ]
            }, {
              type: 'category',
              label: 'Incentive Logic', 
              link: {
                type: 'generated-index',
              },
              collapsed: false,
              items: [
                'architecture/hub-layer/consensus/incentive/1-1-validator-staker',
                'architecture/hub-layer/consensus/incentive/1-2-reward-commission',
              ]
            }
          ]
        }, {
          type: 'category',
          label: 'OASYS Ecosystem', 
          link: {
            type: 'doc',
            id: 'architecture/hub-layer/ecosystem/1-1-ecosystem',
          },
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'Fungible Token', 
              link: {
                type: 'generated-index',
              },
              collapsed: false,
              items: [
                'architecture/hub-layer/ecosystem/ft/1-1-ft-types',
                'architecture/hub-layer/ecosystem/ft/1-2-bridge',
                'architecture/hub-layer/ecosystem/ft/1-3-dex',
                'architecture/hub-layer/ecosystem/ft/1-4-oas-tokens',
              ]
            }, {
              type: 'category',
              label: 'Non Fungible Token', 
              link: {
                type: 'doc',
                id: 'architecture/hub-layer/ecosystem/nft/1-1-nft-types',
              },
              collapsed: false,
              items: [
                'architecture/hub-layer/ecosystem/nft/1-1-nft-types',
                'architecture/hub-layer/ecosystem/nft/1-2-bridge',
                // 'architecture/hub-layer/ecosystem/nft/1-3-oasyx',
                'architecture/hub-layer/ecosystem/nft/1-4-marketplace',
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Verse Layer', 
      link: {
        type: 'doc',
        id: 'architecture/verse-layer/1-1-verse-layer'
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Verse Consensus (PoA or PoS)', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/consensus/1-1-consensus'
          },
          collapsed: false,
          items: []
        }, {
          type: 'category',
          label: 'Permissioned / Permissionless', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/permission/1-1-permission'
          },
          collapsed: false,
          items: []
        }, {
          type: 'category',
          label: 'Original Rollup', 
          link: {
            type: 'doc',
            id: 'architecture/verse-layer/rollup/1-1-overview'
          },
          collapsed: false,
          items: [
            'architecture/verse-layer/rollup/1-1-overview',
            'architecture/verse-layer/rollup/1-2-difference',
            {
              type: 'category',
              label: 'Verifier', 
              link: {
                type: 'doc',
                id: 'architecture/verse-layer/rollup/1-3-verifier'
              },
              collapsed: false,
              items: [
                'architecture/verse-layer/rollup/2-1-how-to-pay-network-fee',
                'architecture/verse-layer/rollup/2-2-initial-verifier',
              ]
            }
          ]
        }
      ]
    },
  ],
  hubvalidator: [
    {
      type: 'autogenerated',
      dirName: 'hub-validator',
    },
  ],
  versedeveloper: [
    {
      type: 'autogenerated',
      dirName: 'verse-developer',
    },
  ],
  staking: [
    {
      type: 'doc',
      id: 'staking/stake-oasys/1-1-stake-oasys',
    },
    {
      type: 'category',
      label: 'For Users',
      collapsed: false,
      items: [
      {
        type: 'category',
        label: 'Setup Metamask', 
        link: {
          type: 'doc',
          id: 'staking/setup-metamask/1-1-how-to-setup'
        },
        collapsed: false,
        items: []
      },
      {
        type: 'category',
        label: 'RPC Endpoint', 
        link: {
          type: 'doc',
          id: 'staking/rpc-endpoint/1-1-rpc-endpoint'
        },
        collapsed: false,
        items: []
      },
      {
        type: 'category',
        label: 'Official Links', 
        link: {
          type: 'doc',
          id: 'staking/official-links/1-1-official-links'
        },
        collapsed: false,
        items: []
      }
    ]
    },
  ],
  devtools: [
    {
      type: 'autogenerated',
      dirName: 'dev-tools',
    },
  ],
};
module.exports = sidebars;