const language = {
  info: {
    country_code: "TW",
    lang_name: "繁體中文(台灣)"
  },
  site: {
    description: "BlitZNet Network違規查詢介面<br>一鍵查詢玩家封鎖、警告、踢出與禁言紀錄<br>規則清晰，執行透明，致力保障所有玩家的公平遊戲體驗"
  },
  words: {
    bans: {
      singular: "封鎖",
      plural: "封鎖紀錄"
    },
    mutes: {
      singular: "禁言",
      plural: "禁言紀錄"
    },
    kicks: {
      singular: "踢出",
      plural: "踢出紀錄"
    },
    warns: {
      singular: "警告",
      plural: "警告紀錄"
    },
    yes: "是",
    no: "否",
    player: "玩家",
    staff: "管理員",
    reason: "原因",
    date: "日期",
    expires: "到期時間",
    originServer: "來源伺服器",
    notified: "已通知",
  },
  pages: {
    home: {
      title: "封神榜 | BlitZNet Network",
      subtitle: "一鍵查詢玩家封鎖、警告、踢出與禁言紀錄。規則清晰，執行透明，致力保障所有玩家的公平遊戲體驗"
    },
    history: {
      title: "處罰紀錄",
      subtitle: "處罰總數：{total}",
      table: {
        heads: {
          type: "類型",
          player: "玩家",
          by: "執行者",
          reason: "原因",
          date: "日期",
          expires: "到期時間"
        },
        permanent: "永久處罰",
        expire_not_applicable: "無",
        active: {
          true: "生效中",
          temporal: "限期處罰",
          false: "已過期"
        }
      }
    },
    bans: {
      title: "封鎖列表",
      subtitle: "封鎖總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "封鎖者",
          reason: "原因",
          date: "日期",
          expires: "到期時間"
        },
        permanent: "永久封鎖",
        active: {
          true: "生效中",
          temporal: "限期封鎖",
          false: "已過期"
        }
      },
      info: {
        title: "封鎖 #{id}",
        badges: {
          ipban: "IP封鎖",
          active: "生效中",
          expired: "已過期",
          permanent: "永久封鎖",
        }
      }
    },
    mutes: {
      title: "禁言列表",
      subtitle: "禁言總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "禁言者",
          reason: "原因",
          date: "日期",
          expires: "到期時間"
        },
        permanent: "永久禁言",
        active: {
          true: "生效中",
          temporal: "限期禁言",
          false: "已過期"
        }
      },
      info: {
        title: "禁言 #{id}",
        badges: {
          ipmute: "IP禁言",
          active: "生效中",
          expired: "已過期",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告列表",
      subtitle: "警告總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "警告者",
          reason: "原因",
          date: "日期",
          notified: "已通知"
        },
      },
      info: {
        title: "警告 #{id}"
      }
    },
    kicks: {
      title: "踢出列表",
      subtitle: "踢出總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "踢出者",
          reason: "原因",
          date: "日期"
        }
      },
      info: {
        title: "踢出 #{id}"
      }
    },
    playerHistory: {
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "您存取的頁面不存在，請返回首頁",
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
      description: "資料庫內找不到該玩家",
    }
  }
}
module.exports = language;