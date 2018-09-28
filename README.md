# pm2-test
pm2 사용법 중에 reload사용 시에 0 downtime을 위한 테스트 구현

## How to test


### Case1(Failure)
순서
- 서버시작 -> 서버 요청 -> 서버 재기동

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

### Case2(Success)
순서
- 서버시작(cluster mode) -> 서버요청 -> 서버 재기동

서버 시작
```
 $pm2 start processes.json or pm2 pm2 start app.js -i 1
```

서버 요청
```
 $./invoke.sh
```

서버 재기동
```
 $ pm2 reload process.json or pm2 reload app
```


# Link
 [PM2-reload document](http://pm2.keymetrics.io/docs/usage/cluster-mode/#reload)
