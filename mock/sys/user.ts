import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'qianxun',
      realName: 'Qianxun Admin',
      avatar: 'https://cn.vitejs.dev/logo.svg',
      desc: 'manager',
      password: '123456',
      token:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzNWY4ODM2LWUyNWUtNGE0YS05NjA4LTkzM2IzNzkwMTEzMCJ9.eyJpbmZvIjoie1wibm93VGVuYW50XCI6XCJkZmUyNTU3MS0wYjNjLTQ0MzItYjVkMi04NzFiMjRmMDA3MzBcIixcInJvbGVzXCI6W1wiTFRDX0xTMDA1XCIsXCJMVEMwMDAwMTFcIixcIkxUQ19TVVBFUl9BRE1JTlwiLFwiTFRDMDAwMDg0XCIsXCJHQVRFV0FZX1NVUEVSX0FETUlOXCIsXCJMVEMwMDAxNzRcIixcIkxUQzAwMDE3NVwiXSxcInN1cGVyQWRtaW5cIjpmYWxzZSxcInRlbmFudHNcIjpbXCJkZmUyNTU3MS0wYjNjLTQ0MzItYjVkMi04NzFiMjRmMDA3MzBcIixcImRmZTI1NTcxLTBiM2MtNDQzMi1iNWQyLTg3MWIyNGYwMDczMFwiXSxcInVzZXJJZFwiOlwiYzVhMzhjYjgxM2VlNGU4NThlZTY1ZDdkYmZjMzU0NzdcIixcInVzZXJOYW1lXCI6XCJhZG1pblwifSIsInN1YiI6ImFkbWluIiwiYXVkIjoibXNtcCIsImV4cCI6MTYyODM4Nzk1NSwiaWF0IjoxNjI1Nzk1OTU1fQ.kwJgiKYN-1mi3XN1KEynXfJGKT1YAJLiIK6JKxdN22CjllRJ0UkzSBfanqnx67h6Iw142CK_hyLeVeplUU_uIZSS_S4kUkvpw9LD3BLdj49dRHvWi2-siZStAl_kChm2XwyP_X8ktxHw3d7EVBulKz693fEuiyocZHStRfDCEyoXdyHFQc5Q0Z20cfEwcL60_AJaI_qmVwbxmKnNPxA8Jgb8LBGvf-f12tL58EtdRnhCVJrOY-YIIwYr6_dcPtBmUAGrqz2l4YsBSnRp63C0qlQTgwjXhBz2-uWcmDVsFQP6vJ5B-uxzzWX8aYOxT_ryIjm_GwGhkIDjQh-Lif6wDQ',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super',
        },
      ],
    },
    {
      userId: '2',
      username: 'test',
      password: '123456',
      realName: 'test user',
      avatar: 'https://cn.vitejs.dev/logo.svg',
      desc: 'tester',
      token: 'fakeToken2',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ];
}

const fakeCodeList: any = {
  '1': ['1000', '3000', '5000'],

  '2': ['2000', '4000', '6000'],
};

const notify = [
  {
    key: '1',
    name: '通知',
    list: [
      {
        id: '000000001',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '你收到了 14 份新周报',
        description: '',
        datetime: '2017-08-09',
        type: '1',
      },
      {
        id: '000000002',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        description: '',
        datetime: '2017-08-08',
        type: '1',
      },
      {
        id: '000000003',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '这种模板可以区分多种通知类型',
        description: '',
        datetime: '2017-08-07',
        // read: true,
        type: '1',
      },
      {
        id: '000000004',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: '左侧图标用于区分不同的类型',
        description: '',
        datetime: '2017-08-07',
        type: '1',
      },
    ],
  },
  {
    key: '2',
    name: '消息',
    list: [
      {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '曲丽丽 评论了你',
        description: '描述信息描述信息描述信息',
        datetime: '2017-08-07',
        type: '2',
        clickClose: true,
        url: '',
      },
      {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '朱偏右 回复了你',
        description: '这种模板用于提醒谁与你发生了互动',
        datetime: '2017-08-07',
        type: '2',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '标题',
        description: '这种模板用于提醒谁与你发生了互动',
        datetime: '2017-08-07',
        type: '2',
        clickClose: true,
      },
    ],
  },
  {
    key: '3',
    name: '待办',
    list: [
      {
        id: '000000009',
        avatar: '',
        title: '任务名称',
        description: '任务需要在 2017-01-12 20:00 前启动',
        datetime: '',
        extra: '未开始',
        color: '',
        type: '3',
      },
      {
        id: '000000010',
        avatar: '',
        title: '第三方紧急代码变更',
        description: '冠霖 需在 2017-01-07 前完成代码变更任务',
        datetime: '',
        extra: '马上到期',
        color: 'red',
        type: '3',
      },
      {
        id: '000000011',
        avatar: '',
        title: '信息安全考试',
        description: '指派竹尔于 2017-01-09 前完成更新并发布',
        datetime: '',
        extra: '已耗时 8 天',
        color: 'gold',
        type: '3',
      },
      {
        id: '000000012',
        avatar: '',
        title: 'ABCD 版本发布',
        description: '指派竹尔于 2017-01-09 前完成更新并发布',
        datetime: '',
        extra: '进行中',
        color: 'blue',
        type: '3',
      },
    ],
  },
];
export default [
  // mock user login
  {
    url: '/basic-api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password
      );
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      const { userId, username: _username, token, realName, desc, roles } = checkUser;
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      });
    },
  },
  {
    url: '/basic-api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/basic-api/getPermCode',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      const codeList = fakeCodeList[checkUser.userId];

      return resultSuccess(codeList);
    },
  },
  {
    url: '/basic-api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      return resultSuccess(undefined, { message: 'Token has been destroyed' });
    },
  },
  {
    url: '/basic-api/getNotify',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess(notify);
    },
  },
] as MockMethod[];
