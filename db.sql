
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

select * from userinfo  ;
select * from userinfo  where username = "tengavinwood";
