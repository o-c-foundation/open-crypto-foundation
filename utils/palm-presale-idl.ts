import { Idl } from '@project-serum/anchor';

export const PalmPresale: Idl = {
  "version": "0.1.0",
  "name": "palm_presale",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "endTime",
          "type": "i64"
        },
        {
          "name": "pricePerToken",
          "type": "u64"
        },
        {
          "name": "totalTokens",
          "type": "u64"
        }
      ]
    },
    {
      "name": "purchaseTokens",
      "accounts": [
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updatePresale",
      "accounts": [
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "startTime",
          "type": "i64"
        },
        {
          "name": "endTime",
          "type": "i64"
        },
        {
          "name": "pricePerToken",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "PresaleState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "pricePerToken",
            "type": "u64"
          },
          {
            "name": "totalTokens",
            "type": "u64"
          },
          {
            "name": "totalSold",
            "type": "u64"
          },
          {
            "name": "totalFundsCollected",
            "type": "u64"
          },
          {
            "name": "isPaused",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PresaleNotActive",
      "msg": "Presale is not active yet or has ended"
    },
    {
      "code": 6001,
      "name": "InsufficientTokens",
      "msg": "Not enough tokens left in presale"
    },
    {
      "code": 6002,
      "name": "InvalidAmount",
      "msg": "Amount must be greater than zero"
    },
    {
      "code": 6003,
      "name": "PresalePaused",
      "msg": "Presale is currently paused"
    },
    {
      "code": 6004,
      "name": "Unauthorized",
      "msg": "Only admin can perform this action"
    },
    {
      "code": 6005,
      "name": "PresaleStillActive",
      "msg": "Cannot withdraw funds while presale is active"
    }
  ]
}; 