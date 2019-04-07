
create database ss;

use ss;

CREATE TABLE stream_keys(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  owner varchar(100),
  keystr varchar(100),
  keyhash varchar(100),
  price  INT UNSIGNED  DEFAULT 0,
  status INT UNSIGNED  DEFAULT 0, 
  PRIMARY KEY (id),
  UNIQUE (keystr)
);

insert into stream_keys values(null, "joe", 'key11111','aaaaaaa', 1234, 0);
insert into stream_keys values(null, "joe", 'key22222','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key33333','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key44444','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key55555','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key66666','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key77777','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key888888','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key99999','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "joe", 'key1111111','bbbbbbb', 1234, 0);

insert into stream_keys values(null, "xx", 'aaaaaaa','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'bbbbbbb','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'ccccccc','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'ddddddd','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'eeeeeee','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'fffffff','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'ggggggg','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'hhhhhhh','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'iiiiiii','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'jjjjjjj','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'kkkkkkk','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'lllllll','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'mmmmmmm','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'nnnnnnn','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'ooooooo','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'ppppppp','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'qqqqqqq','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'rrrrrrr','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'sssssss','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'ttttttt','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'uuuuuuu','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'vvvvvvv','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'wwwwwww','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'xxxxxxx','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'yyyyyyy','bbbbbbb', 1234, 0);
insert into stream_keys values(null, "xx", 'zzzzzzz','bbbbbbb', 1234, 0);

update stream_keys set status = 0;

select * from stream_keys  ;

-- eos账号和email

CREATE TABLE userinfo(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username varchar(100),
  mail varchar(100),
  PRIMARY KEY (id),
  UNIQUE (username)
);

insert into userinfo values(null, "tengavinwood", "ganjingcun@gmail.com");
update userinfo set mail = 'ganjingcun@gmail.com' where username = 'tengavinwood';
update userinfo set mail = '343747757@qq.com' where username = 'tengavinwood';

select * from userinfo;
select * from userinfo  where username = "tengavinwood";


-- follow
CREATE TABLE follows(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username varchar(100), -- 用户
  followed varchar(100), -- 关注的人
  status INT UNSIGNED  DEFAULT 0, 
  create_time timestamp,
  PRIMARY KEY (id),
  UNIQUE (username, followed)
);

select * from follows;

-- 获取某账号关注数 
select count(*) from follows where username = 'joetothemoon';

-- 获取某账号粉丝数 
select count(*) from follows where followed = 'joetothemoon';

insert into follows values(null, "tengavinwood", "joetothemoon", 0 , now());
insert into follows values(null, "joetothemoon", "tengavinwood", 0 , now());
insert into follows values(null, "joetothemoon", "111111", 0 , now());
insert into follows values(null, "joetothemoon", "222222", 0 , now());
insert into follows values(null, "joetothemoon", "333333", 0 , now());
insert into follows values(null, "111111", "joetothemoon", 0 , now());
insert into follows values(null, "222222", "joetothemoon", 0 , now());
insert into follows values(null, "333333", "joetothemoon", 0 , now());
insert into follows values(null, "444444", "joetothemoon", 0 , now());


drop table follows;