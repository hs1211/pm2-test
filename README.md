# pm2-test
pm2 사용법 중에 reload사용 시에 0 downtime을 위한 테스트 구현

## How to test

서버 시작
```
 $pm2 start app.js
```

서버 요청
```
 $./invoke.sh
```

서버 재기동
```
 $ pm2 reload app
```


# Link
 [PM2-reload document](http://pm2.keymetrics.io/docs/usage/cluster-mode/#reload)
