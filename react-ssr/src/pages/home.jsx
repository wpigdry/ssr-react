import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <h1>Page Home 我是home页</h1>
        <main>
            home内容，主体
        </main>
        <Link to="/post">Link to Post 跳转post路由
        </Link>
    </div>
);
