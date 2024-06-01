## Project setup process

Run 
```
npm run dev
```
You can see the project live in [This Link](https://moshiurse.github.io/vanillajs-projects/insidemap)

Start typing to get results. 

The Api I am working with are version **v1** , After signin It automatically assign me v1.
- **https://transfermarkt-db.p.rapidapi.com/v1/search/full-search**
- **https://transfermarkt-db.p.rapidapi.com/v1/players/short-info**
- **https://transfermarkt-db.p.rapidapi.com/v1/players/profile**

**NB:** I got confused about some data and also had lack of knowledge about club football and transfer market.

**I store players data in redux when searching. So to create team you have to search player first then go to create team section then you will get players list to add.**

**I am showing warning in top of creating team**

![image](https://github.com/moshiurse/assesment-insidemap/assets/15215020/93a14735-5a20-43f0-b46d-c2636510ece7)

![image](https://github.com/moshiurse/assesment-insidemap/assets/15215020/04e1cecd-cd4d-4a87-81a1-1d1e3e9aa663)

**If more than two country or club remains in team**
![image](https://github.com/moshiurse/assesment-insidemap/assets/15215020/d6d10c6d-0024-49bd-831a-808d06e78028)

**I might make team formation more reusable, In the meantime I lost almost 6-7 hours code by mistakenly using rebasing, though I recovered then**

**I completed 95% feature, For Api inconsistency in my end filtering data couldn't be done**

**I might use /players/profile for each player but I have limited api usages, thats why i did not use this**

**Infinity scroll has issue(debug a lot) that is why I used click based paging is there by clicking**
