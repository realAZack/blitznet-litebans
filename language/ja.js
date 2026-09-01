const language = {
  info: {
    country_code: "JP",
    lang_name: "日本語"
  },
  site: {
    description: "BlitZNet Network 違反履歴照会インターフェース。プレイヤーのBAN、警告、キック、ミュート履歴を一括検索。ルールを明確に、処罰を透明化し、全プレイヤーに公平なゲーム環境を提供します。"
  },
  words: {
    bans: {
      singular: "BAN",
      plural: "BAN履歴"
    },
    mutes: {
      singular: "ミュート",
      plural: "ミュート履歴"
    },
    kicks: {
      singular: "キック",
      plural: "キック履歴"
    },
    warns: {
      singular: "警告",
      plural: "警告履歴"
    },
    yes: "はい",
    no: "いいえ",
    player: "プレイヤー",
    staff: "スタッフ",
    reason: "理由",
    date: "日付",
    expires: "期限",
    originServer: "元のサーバー",
    notified: "通知済み",
  },
  pages: {
    home: {
      title: "封神榜",
      subtitle: "プレイヤーのBAN、警告、キック、ミュート履歴を一括検索\nルールを明確に、処罰を透明化し、全プレイヤーに公平なゲーム環境を提供します"
    },
    history: {
      title: "処罰履歴",
      subtitle: "合計処罰数：{total}",
      table: {
        heads: {
          type: "種別",
          player: "プレイヤー",
          by: "処罰者",
          reason: "理由",
          date: "日付",
          expires: "期限"
        },
        permanent: "永久処罰",
        expire_not_applicable: "無し",
        active: {
          true: "有効",
          temporal: "期限付き",
          false: "期限切れ"
        }
      }
    },
    bans: {
      title: "BAN一覧",
      subtitle: "BAN数：{total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "BAN実行者",
          reason: "理由",
          date: "日付",
          expires: "期限"
        },
        permanent: "永久BAN",
        active: {
          true: "有効",
          temporal: "期限付きBAN",
          false: "期限切れ"
        }
      },
      info: {
        title: "BAN #{id}",
        badges: {
          ipban: "IP BAN",
          active: "有効",
          expired: "期限切れ",
          permanent: "永久BAN",
        }
      }
    },
    mutes: {
      title: "ミュート一覧",
      subtitle: "ミュート数：{total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "ミュート実行者",
          reason: "理由",
          date: "日付",
          expires: "期限"
        },
        permanent: "永久ミュート",
        active: {
          true: "有効",
          temporal: "期限付きミュート",
          false: "期限切れ"
        }
      },
      info: {
        title: "ミュート #{id}",
        badges: {
          ipmute: "IPミュート",
          active: "有効",
          expired: "期限切れ",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告一覧",
      subtitle: "警告数：{total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "警告者",
          reason: "理由",
          date: "日付",
          notified: "通知済み"
        },
      },
      info: {
        title: "警告 #{id}"
      }
    },
    kicks: {
      title: "キック一覧",
      subtitle: "キック数：{total}",
      table: {
        heads: {
          player: "プレイヤー",
          by: "キック実行者",
          reason: "理由",
          date: "日付"
        }
      },
      info: {
        title: "キック #{id}"
      }
    },
    playerHistory: {
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "お探しのページは存在しません。ホームへ戻ってください",
        button: "ホームへ戻る"
      }
    }
  },
  pagination: {
    previous: "前へ",
    next: "次へ"
  },
  notifications: {
    playerNotFound: {
      title: "エラー",
      description: "データベース内に該当プレイヤーが見つかりません",
    }
  }
}
module.exports = language;