import { generateErrorMap } from "@saberhq/anchor-contrib";

export type FarmIDL = {
  version: "0.0.0";
  name: "farm";
  instructions: [
    {
      name: "newLandlord";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "landlord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintProxyProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rewardsTokenMint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "base";
          type: "publicKey";
        },
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "dailyRewardsRate";
          type: "u64";
        }
      ];
    },
    {
      name: "transferAuthority";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "landlord";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "newAuthority";
          type: "publicKey";
        }
      ];
    },
    {
      name: "acceptAuthority";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "landlord";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "setDailyRewards";
      accounts: [
        {
          name: "auth";
          accounts: [
            {
              name: "authority";
              isMut: false;
              isSigner: true;
            },
            {
              name: "landlord";
              isMut: true;
              isSigner: false;
            }
          ];
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "newRate";
          type: "u64";
        }
      ];
    },
    {
      name: "createPlot";
      accounts: [
        {
          name: "plot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "auth";
          accounts: [
            {
              name: "authority";
              isMut: false;
              isSigner: true;
            },
            {
              name: "landlord";
              isMut: true;
              isSigner: false;
            }
          ];
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardsShare";
          type: "u64";
        }
      ];
    },
    {
      name: "setRewardsShare";
      accounts: [
        {
          name: "auth";
          accounts: [
            {
              name: "authority";
              isMut: false;
              isSigner: true;
            },
            {
              name: "landlord";
              isMut: true;
              isSigner: false;
            }
          ];
        },
        {
          name: "plot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "newShare";
          type: "u64";
        }
      ];
    },
    {
      name: "setFamine";
      accounts: [
        {
          name: "auth";
          accounts: [
            {
              name: "authority";
              isMut: false;
              isSigner: true;
            },
            {
              name: "landlord";
              isMut: false;
              isSigner: false;
            }
          ];
        },
        {
          name: "plot";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "famineTs";
          type: "i64";
        }
      ];
    },
    {
      name: "updatePlotRewards";
      accounts: [
        {
          name: "plot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "landlord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createFarmer";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "farmer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "plot";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "farmerVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "claimRewards";
      accounts: [
        {
          name: "mintProxyState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proxyMintAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintProxyProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "minterInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardsTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardsTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stake";
          accounts: [
            {
              name: "authority";
              isMut: false;
              isSigner: true;
            },
            {
              name: "farmer";
              isMut: true;
              isSigner: false;
            },
            {
              name: "plot";
              isMut: true;
              isSigner: false;
            },
            {
              name: "farmerVault";
              isMut: true;
              isSigner: false;
            },
            {
              name: "tokenAccount";
              isMut: true;
              isSigner: false;
            },
            {
              name: "tokenProgram";
              isMut: false;
              isSigner: false;
            },
            {
              name: "landlord";
              isMut: false;
              isSigner: false;
            },
            {
              name: "clock";
              isMut: false;
              isSigner: false;
            }
          ];
        }
      ];
      args: [];
    },
    {
      name: "stakeTokens";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "farmer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "plot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "farmerVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "landlord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdrawTokens";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "farmer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "plot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "farmerVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "landlord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "unusedStubClaimRewards";
      accounts: [
        {
          name: "mintProxyState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proxyMintAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mintProxyProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "minterInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardsTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardsTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stake";
          accounts: [
            {
              name: "authority";
              isMut: false;
              isSigner: true;
            },
            {
              name: "farmer";
              isMut: true;
              isSigner: false;
            },
            {
              name: "plot";
              isMut: true;
              isSigner: false;
            },
            {
              name: "farmerVault";
              isMut: true;
              isSigner: false;
            },
            {
              name: "tokenAccount";
              isMut: true;
              isSigner: false;
            },
            {
              name: "tokenProgram";
              isMut: false;
              isSigner: false;
            },
            {
              name: "landlord";
              isMut: false;
              isSigner: false;
            },
            {
              name: "clock";
              isMut: false;
              isSigner: false;
            }
          ];
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "Landlord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "base";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "pendingAuthority";
            type: "publicKey";
          },
          {
            name: "numPlots";
            type: "u16";
          },
          {
            name: "dailyRewardsRate";
            type: "u64";
          },
          {
            name: "totalRewardsShares";
            type: "u64";
          },
          {
            name: "mintProxyProgram";
            type: "publicKey";
          },
          {
            name: "rewardsTokenMint";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "Plot";
      type: {
        kind: "struct";
        fields: [
          {
            name: "landlordKey";
            type: "publicKey";
          },
          {
            name: "tokenMintKey";
            type: "publicKey";
          },
          {
            name: "tokenMintDecimals";
            type: "u8";
          },
          {
            name: "famineTs";
            type: "i64";
          },
          {
            name: "lastUpdateTs";
            type: "i64";
          },
          {
            name: "rewardsPerTokenStored";
            type: "u64";
          },
          {
            name: "dailyRewardsRate";
            type: "u64";
          },
          {
            name: "rewardsShare";
            type: "u64";
          },
          {
            name: "totalTokensDeposited";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "Farmer";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "plotKey";
            type: "publicKey";
          },
          {
            name: "tokenVaultKey";
            type: "publicKey";
          },
          {
            name: "wagesEarned";
            type: "u64";
          },
          {
            name: "wagesPerTokenPaid";
            type: "u64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "StakeAction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Stake";
          },
          {
            name: "Withdraw";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "NewLandlordEvent";
      fields: [
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "dailyRewardsRate";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "ClaimEvent";
      fields: [
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "stakedToken";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardsToken";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "StakeEvent";
      fields: [
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "token";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "WithdrawEvent";
      fields: [
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "token";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "LandlordDailyRewardsUpdateEvent";
      fields: [
        {
          name: "previousRate";
          type: "u64";
          index: false;
        },
        {
          name: "newRate";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "FarmerCreateEvent";
      fields: [
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "plot";
          type: "publicKey";
          index: true;
        },
        {
          name: "farmer";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "PlotCreateEvent";
      fields: [
        {
          name: "tokenMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "dailyRewardsRate";
          type: "u64";
          index: false;
        },
        {
          name: "rewardsShare";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "PlotRewardsUpdateEvent";
      fields: [
        {
          name: "tokenMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "dailyRewardsRate";
          type: "u64";
          index: false;
        },
        {
          name: "rewardsShare";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "u64";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 300;
      name: "Unauthorized";
      msg: "You are not authorized to perform this action.";
    },
    {
      code: 301;
      name: "MintMismatch";
      msg: "Token account's mint does not match the mint of the provided plot.";
    },
    {
      code: 302;
      name: "InsufficientBalance";
      msg: "Insufficient staked balance for withdraw request.";
    },
    {
      code: 303;
      name: "PlotMismatch";
      msg: "Provided plot vault is invalid";
    },
    {
      code: 304;
      name: "U64ConversionFailure";
      msg: "Error: Conversion to or from u64 failed.";
    },
    {
      code: 305;
      name: "PendingAuthorityNotSet";
      msg: "Pending authority not set";
    },
    {
      code: 306;
      name: "PendingAuthorityMismatch";
      msg: "Pending authority mismatch";
    },
    {
      code: 307;
      name: "InvalidRewardsShare";
      msg: "Invalid plot rewards share";
    },
    {
      code: 308;
      name: "VaultOwnerMismatch";
      msg: "Vault owner must be farmer";
    },
    {
      code: 309;
      name: "VaultMintMismatch";
      msg: "Vault mint mismatch";
    },
    {
      code: 310;
      name: "NewVaultNotEmpty";
      msg: "New farmer vault must be empty";
    },
    {
      code: 311;
      name: "VaultATAMismatch";
      msg: "Vault must be ATA of farmer";
    },
    {
      code: 312;
      name: "FarmerAuthorityMismatch";
      msg: "Farmer authority mismatch";
    },
    {
      code: 313;
      name: "InvalidMintProxyProgram";
      msg: "The mint proxy program provided was not valid.";
    },
    {
      code: 314;
      name: "ClaimMintMismatch";
      msg: "The rewards token account provided did not match the rewards mint.";
    },
    {
      code: 315;
      name: "ProxyMintAuthorityMismatch";
      msg: "Proxy mint authority mismatch";
    },
    {
      code: 316;
      name: "ProxyMintAuthorityOwnerMismatch";
      msg: "Proxy mint authority owner mismatch";
    },
    {
      code: 317;
      name: "MintProxyOwnerMismatch";
      msg: "Mint proxy account owner mismatch";
    },
    {
      code: 318;
      name: "RewardsTokenAccountOwnerMismatch";
      msg: "Rewards token account owner mismatch";
    },
    {
      code: 319;
      name: "FarmerVaultMismatch";
      msg: "Farmer vault mismatch";
    },
    {
      code: 320;
      name: "LandlordMismatch";
      msg: "Landlord mismatch";
    },
    {
      code: 321;
      name: "InsufficientAllowance";
      msg: "Insufficient allowance.";
    },
    {
      code: 322;
      name: "MathOverflow";
      msg: "Math overflow.";
    },
    {
      code: 323;
      name: "NotEnoughTokens";
      msg: "Not enough tokens.";
    },
    {
      code: 324;
      name: "TemporalRift";
      msg: "Temporal rift.";
    }
  ];
};
export const FarmJSON: FarmIDL = {
  version: "0.0.0",
  name: "farm",
  instructions: [
    {
      name: "newLandlord",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "landlord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintProxyProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rewardsTokenMint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "base",
          type: "publicKey",
        },
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "dailyRewardsRate",
          type: "u64",
        },
      ],
    },
    {
      name: "transferAuthority",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "landlord",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newAuthority",
          type: "publicKey",
        },
      ],
    },
    {
      name: "acceptAuthority",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "landlord",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "setDailyRewards",
      accounts: [
        {
          name: "auth",
          accounts: [
            {
              name: "authority",
              isMut: false,
              isSigner: true,
            },
            {
              name: "landlord",
              isMut: true,
              isSigner: false,
            },
          ],
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newRate",
          type: "u64",
        },
      ],
    },
    {
      name: "createPlot",
      accounts: [
        {
          name: "plot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "auth",
          accounts: [
            {
              name: "authority",
              isMut: false,
              isSigner: true,
            },
            {
              name: "landlord",
              isMut: true,
              isSigner: false,
            },
          ],
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardsShare",
          type: "u64",
        },
      ],
    },
    {
      name: "setRewardsShare",
      accounts: [
        {
          name: "auth",
          accounts: [
            {
              name: "authority",
              isMut: false,
              isSigner: true,
            },
            {
              name: "landlord",
              isMut: true,
              isSigner: false,
            },
          ],
        },
        {
          name: "plot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newShare",
          type: "u64",
        },
      ],
    },
    {
      name: "setFamine",
      accounts: [
        {
          name: "auth",
          accounts: [
            {
              name: "authority",
              isMut: false,
              isSigner: true,
            },
            {
              name: "landlord",
              isMut: false,
              isSigner: false,
            },
          ],
        },
        {
          name: "plot",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "famineTs",
          type: "i64",
        },
      ],
    },
    {
      name: "updatePlotRewards",
      accounts: [
        {
          name: "plot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "landlord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createFarmer",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "farmer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "plot",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "farmerVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "claimRewards",
      accounts: [
        {
          name: "mintProxyState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proxyMintAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintProxyProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "minterInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardsTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardsTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stake",
          accounts: [
            {
              name: "authority",
              isMut: false,
              isSigner: true,
            },
            {
              name: "farmer",
              isMut: true,
              isSigner: false,
            },
            {
              name: "plot",
              isMut: true,
              isSigner: false,
            },
            {
              name: "farmerVault",
              isMut: true,
              isSigner: false,
            },
            {
              name: "tokenAccount",
              isMut: true,
              isSigner: false,
            },
            {
              name: "tokenProgram",
              isMut: false,
              isSigner: false,
            },
            {
              name: "landlord",
              isMut: false,
              isSigner: false,
            },
            {
              name: "clock",
              isMut: false,
              isSigner: false,
            },
          ],
        },
      ],
      args: [],
    },
    {
      name: "stakeTokens",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "farmer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "plot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "farmerVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "landlord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawTokens",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "farmer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "plot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "farmerVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "landlord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "unusedStubClaimRewards",
      accounts: [
        {
          name: "mintProxyState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proxyMintAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mintProxyProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "minterInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardsTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardsTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stake",
          accounts: [
            {
              name: "authority",
              isMut: false,
              isSigner: true,
            },
            {
              name: "farmer",
              isMut: true,
              isSigner: false,
            },
            {
              name: "plot",
              isMut: true,
              isSigner: false,
            },
            {
              name: "farmerVault",
              isMut: true,
              isSigner: false,
            },
            {
              name: "tokenAccount",
              isMut: true,
              isSigner: false,
            },
            {
              name: "tokenProgram",
              isMut: false,
              isSigner: false,
            },
            {
              name: "landlord",
              isMut: false,
              isSigner: false,
            },
            {
              name: "clock",
              isMut: false,
              isSigner: false,
            },
          ],
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "Landlord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "base",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "pendingAuthority",
            type: "publicKey",
          },
          {
            name: "numPlots",
            type: "u16",
          },
          {
            name: "dailyRewardsRate",
            type: "u64",
          },
          {
            name: "totalRewardsShares",
            type: "u64",
          },
          {
            name: "mintProxyProgram",
            type: "publicKey",
          },
          {
            name: "rewardsTokenMint",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "Plot",
      type: {
        kind: "struct",
        fields: [
          {
            name: "landlordKey",
            type: "publicKey",
          },
          {
            name: "tokenMintKey",
            type: "publicKey",
          },
          {
            name: "tokenMintDecimals",
            type: "u8",
          },
          {
            name: "famineTs",
            type: "i64",
          },
          {
            name: "lastUpdateTs",
            type: "i64",
          },
          {
            name: "rewardsPerTokenStored",
            type: "u64",
          },
          {
            name: "dailyRewardsRate",
            type: "u64",
          },
          {
            name: "rewardsShare",
            type: "u64",
          },
          {
            name: "totalTokensDeposited",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "Farmer",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "plotKey",
            type: "publicKey",
          },
          {
            name: "tokenVaultKey",
            type: "publicKey",
          },
          {
            name: "wagesEarned",
            type: "u64",
          },
          {
            name: "wagesPerTokenPaid",
            type: "u64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "StakeAction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Stake",
          },
          {
            name: "Withdraw",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "NewLandlordEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "dailyRewardsRate",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "ClaimEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "stakedToken",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardsToken",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "StakeEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "token",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "WithdrawEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "token",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "LandlordDailyRewardsUpdateEvent",
      fields: [
        {
          name: "previousRate",
          type: "u64",
          index: false,
        },
        {
          name: "newRate",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "FarmerCreateEvent",
      fields: [
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "plot",
          type: "publicKey",
          index: true,
        },
        {
          name: "farmer",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "PlotCreateEvent",
      fields: [
        {
          name: "tokenMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "dailyRewardsRate",
          type: "u64",
          index: false,
        },
        {
          name: "rewardsShare",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "PlotRewardsUpdateEvent",
      fields: [
        {
          name: "tokenMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "dailyRewardsRate",
          type: "u64",
          index: false,
        },
        {
          name: "rewardsShare",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "u64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 300,
      name: "Unauthorized",
      msg: "You are not authorized to perform this action.",
    },
    {
      code: 301,
      name: "MintMismatch",
      msg: "Token account's mint does not match the mint of the provided plot.",
    },
    {
      code: 302,
      name: "InsufficientBalance",
      msg: "Insufficient staked balance for withdraw request.",
    },
    {
      code: 303,
      name: "PlotMismatch",
      msg: "Provided plot vault is invalid",
    },
    {
      code: 304,
      name: "U64ConversionFailure",
      msg: "Error: Conversion to or from u64 failed.",
    },
    {
      code: 305,
      name: "PendingAuthorityNotSet",
      msg: "Pending authority not set",
    },
    {
      code: 306,
      name: "PendingAuthorityMismatch",
      msg: "Pending authority mismatch",
    },
    {
      code: 307,
      name: "InvalidRewardsShare",
      msg: "Invalid plot rewards share",
    },
    {
      code: 308,
      name: "VaultOwnerMismatch",
      msg: "Vault owner must be farmer",
    },
    {
      code: 309,
      name: "VaultMintMismatch",
      msg: "Vault mint mismatch",
    },
    {
      code: 310,
      name: "NewVaultNotEmpty",
      msg: "New farmer vault must be empty",
    },
    {
      code: 311,
      name: "VaultATAMismatch",
      msg: "Vault must be ATA of farmer",
    },
    {
      code: 312,
      name: "FarmerAuthorityMismatch",
      msg: "Farmer authority mismatch",
    },
    {
      code: 313,
      name: "InvalidMintProxyProgram",
      msg: "The mint proxy program provided was not valid.",
    },
    {
      code: 314,
      name: "ClaimMintMismatch",
      msg: "The rewards token account provided did not match the rewards mint.",
    },
    {
      code: 315,
      name: "ProxyMintAuthorityMismatch",
      msg: "Proxy mint authority mismatch",
    },
    {
      code: 316,
      name: "ProxyMintAuthorityOwnerMismatch",
      msg: "Proxy mint authority owner mismatch",
    },
    {
      code: 317,
      name: "MintProxyOwnerMismatch",
      msg: "Mint proxy account owner mismatch",
    },
    {
      code: 318,
      name: "RewardsTokenAccountOwnerMismatch",
      msg: "Rewards token account owner mismatch",
    },
    {
      code: 319,
      name: "FarmerVaultMismatch",
      msg: "Farmer vault mismatch",
    },
    {
      code: 320,
      name: "LandlordMismatch",
      msg: "Landlord mismatch",
    },
    {
      code: 321,
      name: "InsufficientAllowance",
      msg: "Insufficient allowance.",
    },
    {
      code: 322,
      name: "MathOverflow",
      msg: "Math overflow.",
    },
    {
      code: 323,
      name: "NotEnoughTokens",
      msg: "Not enough tokens.",
    },
    {
      code: 324,
      name: "TemporalRift",
      msg: "Temporal rift.",
    },
  ],
};
export const FarmErrors = generateErrorMap(FarmJSON);
