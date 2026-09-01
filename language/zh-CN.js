const language = {
  info: {
    country_code: "CN",
    lang_name: "简体中文"
  },
  site: {
    description: "BlitZNet Network违规查询界面<br>一键查询玩家封禁、警告、踢出与禁言历史<br>规则清晰, 执行透明, 致力保障所有玩家的公平游戏体验"
  },
  words: {
    bans: {
      singular: "封禁",
      plural: "封禁记录"
    },
    mutes: {
      singular: "禁言",
      plural: "禁言记录"
    },
    kicks: {
      singular: "踢出",
      plural: "踢出记录"
    },
    warns: {
      singular: "警告",
      plural: "警告记录"
    },
    yes: "是",
    no: "否",
    player: "玩家",
    staff: "管理员",
    reason: "原因",
    date: "日期",
    expires: "到期时间",
    originServer: "来源服务器",
    notified: "已通知",
  },
  pages: {
    home: {
      title: "封神榜 | BlitZNet Network",
      subtitle: "一键查询玩家封禁、警告、踢出与禁言历史。规则清晰, 执行透明, 致力保障所有玩家的公平游戏体验"
    },
    history: {
      title: "处罚记录",
      subtitle: "总处罚数量：{total}",
      table: {
        heads: {
          type: "类型",
          player: "玩家",
          by: "执行人",
          reason: "原因",
          date: "日期",
          expires: "到期时间"
        },
        permanent: "永久处罚",
        expire_not_applicable: "无",
        active: {
          true: "生效中",
          temporal: "限时处罚",
          false: "已过期"
        }
      }
    },
    bans: {
      title: "封禁列表",
      subtitle: "封禁总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "封禁人",
          reason: "原因",
          date: "日期",
          expires: "到期时间"
        },
        permanent: "永久封禁",
        active: {
          true: "生效中",
          temporal: "限时封禁",
          false: "已过期"
        }
      },
      info: {
        title: "封禁 #{id}",
        badges: {
          ipban: "IP封禁",
          active: "生效中",
          expired: "已过期",
          permanent: "永久封禁",
        }
      }
    },
    mutes: {
      title: "禁言列表",
      subtitle: "禁言总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "禁言人",
          reason: "原因",
          date: "日期",
          expires: "到期时间"
        },
        permanent: "永久禁言",
        active: {
          true: "生效中",
          temporal: "限时禁言",
          false: "已过期"
        }
      },
      info: {
        title: "禁言 #{id}",
        badges: {
          ipmute: "IP禁言",
          active: "生效中",
          expired: "已过期",
          permanent: "永久",
        }
      }
    },
    warns: {
      title: "警告列表",
      subtitle: "警告总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "警告人",
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
      subtitle: "踢出总数：{total}",
      table: {
        heads: {
          player: "玩家",
          by: "踢出人",
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
        description: "你访问的页面不存在, 请返回首页",
        button: "返回首页"
      }
    }
  },
  pagination: {
    previous: "上一页",
    next: "下一页"
  },
  notifications: {
    playerNotFound: {
      title: "错误",
      description: "数据库内找不到该玩家",
    }
  }
}
module.exports = language;