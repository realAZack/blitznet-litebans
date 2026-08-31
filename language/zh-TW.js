const language = {
  info: {
    country_code: "TW",
    lang_name: "繁體中文(臺灣)"
  },
  site: {
    description: "BlitZNet伺服器違規查詢介面。一鍵查詢玩家停權、警告、踢出與禁言紀錄。規則清晰, 執行透明, 致力保障所有玩家的公平遊戲體驗。"
  },
  words: {
    bans: {
      singular: "停權",
      plural: "停權"
    },
    mutes: {
      singular: "禁言",
      plural: "禁言"
    },
    kicks: {
      singular: "踢出",
      plural: "踢出"
    },
    warns: {
      singular: "警告",
      plural: "警告"
    },
    yes: "是",
    no: "否",
    player: "玩家",
    staff: "管理員",
    reason: "原因",
    date: "日期",
    expires: "到期時間",
    originServer: "來源伺服器",
    notified: "通知",
  },
  pages: {
    home: {
      title: "首頁 | BlitZNet Network",
      // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
      subtitle: "一鍵查詢玩家停權、警告、踢出與禁言紀錄。規則清晰，執行透明，致力保障所有玩家的公平遊戲體驗。"
    },
    history: {
      title: "處罰紀錄",
      // Placeholders: {total}
      subtitle: "總處罰數: {total}",
      table: {
        heads: {
          type: "類型",
          player: "玩家",
          by: "執行",
          reason: "原因",
          date: "日期",
          expires: "到期時間"
        },
        permanent: "永久停權",
        expire_not_applicable: "N/A",
        active: {
          true: "生效中",
          temporal: "暫時",
          false: "已到期"
        }
      }
    },
    bans: {
      title: "停權",
      // Placeholders: {total}
      subtitle: "停權數量: {total}",
      table: {
        heads: {
          player: "玩家",
          by: "執行",
          reason: "原因",
          date: "日期",
          expires: "到期時間"
        },
        permanent: "永久停權",
        active: {
          true: "生效中",
          temporal: "暫時",
          false: "已到期"
        }
      },
      info: {
        title: "停權 #{id}",
        badges: {
          ipban: "IP停權",
          active: "生效中",
          expired: "已到期",
          permanent: "永久",
        }
      }
    },
    mutes: {
      title: "禁言",
      // Placeholders: {total}
      subtitle: "禁言數量: {total}",
      table: {
        heads: {
          player: "玩家",
          by: "執行",
          reason: "原因",
          date: "日期",
          expires: "到期時間"
        },
        permanent: "永久禁言",
        active: {
          true: "生效中",
          temporal: "暫時",
          false: "已到期"
        }
      },
      info: {
        title: "禁言 #{id}",
        badges: {
          ipmute: "IP禁言",
          active: "生效中",
          expired: "已到期",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告",
      // Placeholders: {total}
      subtitle: "警告數量: {total}",
      table: {
        heads: {
          player: "玩家",
          by: "執行",
          reason: "原因",
          date: "日期",
          notified: "通知"
        },
      },
      info: {
        title: "警告 #{id}"
      }
    },
    kicks: {
      title: "踢出",
      // Placeholders: {total}
      subtitle: "踢出數量: {total}",
      table: {
        heads: {
          player: "玩家",
          by: "執行",
          reason: "原因",
          date: "日期"
        }
      },
      info: {
        title: "踢出 #{id}"
      }
    },
    playerHistory: {
      // Placeholders: {player}
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "你似乎迷路了。請返回首頁。",
        button: "返回首頁"
      }
    }
  },
  pagination: {
    previous: "上一頁",
    next: "下一頁"
  },
  notifications: {
    playerNotFound: {
      title: "錯誤",
      description: "資料庫中不存在該玩家。",
    }
  }
}
module.exports = language;
