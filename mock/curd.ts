/**
 * Author: XM
 * Date: 2022-05-15 16:41
 *
 */

import Mock from 'mockjs';

export default {
  'GET /api/crud/list': (req, res) => {
    const { page = 1, size = 10 } = req.query;
    const total = 17;
    const totalPage = Math.ceil(total / size);
    let len = +page === totalPage ? total % size : size;
    res.json(Mock.mock(
      {
        [`data|${len}`]: [{
          'id|+1': (page - 1) * size + 1,
          'title': '@ctitle',
          'status|1-3': 1,
          'tag|1-4': '@cword',
          'ctime': '@datetime',
        }],
        total,
        success: true
      }
    ));
  }
}
