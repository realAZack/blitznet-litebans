const language = {
  info: {
    country_code: "HK",
    lang_name: "繁體中文(香港)"
  },
  site: {
    description: "BlitZNet Network 違規查詢介面。一鍵查詢玩家封鎖、警告、驅逐與靜音紀錄。規則清晰，執行透明，致力保障所有玩家嘅公平遊戲體驗。"
  },
  words: {
    bans: {
      singular: "封鎖",
      plural: "封鎖紀錄"
    },
    mutes: {
      singular: "靜音",
      plural: "靜音紀錄"
    },
    kicks: {
      singular: "驅逐",
      plural: "驅逐紀錄"
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
    expires: "到期日",
    originServer: "來源伺服器",
    notified: "已通知",
  },
  pages: {
    home: {
      title: "封神榜 | BlitZNet Network",
      subtitle: "一鍵查詢玩家封鎖、警告、驅逐與靜音紀錄<br>規則清晰，執行透明，致力保障所有玩家嘅公平遊戲體驗"
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
          expires: "到期日"
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
      title: "封鎖清單",
      subtitle: "封鎖總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "封鎖者",
          reason: "原因",
          date: "日期",
          expires: "到期日"
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
      title: "靜音清單",
      subtitle: "靜音總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "靜音者",
          reason: "原因",
          date: "日期",
          expires: "到期日"
        },
        permanent: "永久靜音",
        active: {
          true: "生效中",
          temporal: "限期靜音",
          false: "已過期"
        }
      },
      info: {
        title: "靜音 #{id}",
        badges: {
          ipmute: "IP靜音",
          active: "生效中",
          expired: "已過期",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告清單",
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
      title: "驅逐清單",
      subtitle: "驅逐總數：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "驅逐者",
          reason: "原因",
          date: "日期"
        }
      },
      info: {
        title: "驅逐 #{id}"
      }
    },
    playerHistory: {
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "你瀏覽嘅頁面不存在，請返回主頁",
        button: "返回主頁"
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