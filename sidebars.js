const sidebars = {
  techdocs: [
    {
      type: 'category',
      label: 'Technical Materials', 
      link: {
        type: 'doc',
        id: 'techdocs/technical-materials/1-1-technical-materials',
      },
      collapsed: false,
      items: [
        'techdocs/technical-materials/2-1-about-oasys',
        'techdocs/technical-materials/2-1-roadmap',
      ],
    }, 
    {
      type: 'category',
      label: 'Technology',
      link: {
        type: 'generated-index',
      },
      items: [
        {  
          type: 'category',
          label: 'Hub-Layer',
          link: {
            type: 'doc',
            id: 'techdocs/technologies/hub-layer/1-1-hub-layer',
          },
          items: [
            'techdocs/technologies/hub-layer/2-1-geth-wallet',
            'techdocs/technologies/hub-layer/2-2-block-confirmation',
            'techdocs/technologies/hub-layer/2-3-proof-of-stake',
            'techdocs/technologies/hub-layer/2-4-version-info',
          ],
        },
        {
          type: 'category',
          label: 'Verse-Layer, with Incredibly High UX',
          link: {
            type: 'doc',
            id: 'techdocs/technologies/verse-layer/1-1-verse-layer',
          },
          items: [
            'techdocs/technologies/verse-layer/2-1-wallet',
            'techdocs/technologies/verse-layer/2-2-verifier',
          ],
        },
        {  
          type: 'category',
          label: 'NFT Bridge',
          link: {
            type: 'generated-index',
          },
          items: [
            'techdocs/technologies/nft-bridge/1-1-nft-bridge',
            'techdocs/technologies/nft-bridge/1-2-vnft-onft-bridge',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Validator',
      link: {
        type: 'generated-index',
      },
      items: [
          'techdocs/validator/hardware-requirements/1-1-hardware-requirements',
          'techdocs/validator/chain-environment/1-1-chain-environment',
          'techdocs/validator/hub-layer-node-build/1-1-hub-layer-node-build',
          'techdocs/validator/hub-layer-client-join/1-1-hub-layer-client-join',
          'techdocs/validator/hub-layer-cli/1-1-hub-layer-cli',
          'techdocs/validator/stakinghub/1-1-staking',
          'techdocs/validator/verse-layer-node-build/1-1-verse-layer-node-build',
          'techdocs/validator/faq/1-1-faq',
      ],
    },
    {
      type: 'category',
      label: 'Wallet',
      link: {
        type: 'generated-index',
      },
      items: [
        'techdocs/wallet/1-1-about',
        'techdocs/wallet/1-1-about-validator-account',
        'techdocs/wallet/1-1-soas',
        'techdocs/wallet/1-1-wallet-commands',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index',
      },
      items: [
        'techdocs/tools/1-1-explorer',
        'techdocs/tools/1-2-faucets',
        'techdocs/tools/1-3-oracles',  
      ],
    },
    {
      type: 'category',
      label: 'Smart Contract',
      link: {
        type: 'generated-index',
      },
      items: [
        'techdocs/smart-contract/1-1-smart-contract',
        'techdocs/smart-contract/1-2-erc20-erc721-factory-use-case',
        'techdocs/smart-contract/1-3-game-example',
      ]
    },
    {
      type: 'category',
      label: 'Commands',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Hub-Layer',
          link: {
            type: 'generated-index',
          },
          items: [
            'techdocs/commands/hub-layer/1-1-hub-layer-geth',
          ],
        },
        {
          type: 'category',
          label: 'Verse-Layer',
          link: {
            type: 'generated-index',
          },
          items: [
            'techdocs/commands/verse-layer/1-1-verse-layer-geth',
          ],
        },
        'techdocs/commands/http-server/1-1-http-server',
        'techdocs/commands/websocket/1-1-websocket',
        'techdocs/commands/ipc-server/1-1-ipc-server',
        'techdocs/commands/graphql/1-1-graphql',
      ],
    },
  ],
  whitepaper: [
    {
      type: 'autogenerated',
      dirName: 'whitepaper',
    },
  ],
};
module.exports = sidebars;