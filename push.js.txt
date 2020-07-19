var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFw7sBF_2BcBvWZiAYlW0hJXFUnqACAHFr2J6spDN0bTs6Rmr66fUml8wTyXWU-ZlKnPB19H99bkl25ZN3_Exts",
   "privateKey": "tM6OEBlcTzf6wWlD9Tbcd8SxU392L9XJOSD6yeBTfrs"
};
 
 
webPush.setVapidDetails(
   'mailto:dhimasucarn5@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "  https://fcm.googleapis.com/fcm/send/dXjyAdnicsA:APA91bEPziuk_bJuLtakVe2eA357BVi1Xq75iH_oK39TdF6mNL6zks_mLHZSv34-PWwV_mwPjLumaYhMPkK25h86ue4r5DmT7Yv9ZMMKMTBnaMSFnp8RhMbkDvA-ZHMp-ck56_qYab25",
   "keys": {
       "p256dh": "BJUdOOXTcPuH6v0OIpRi6JgbErlPUWgh2pnIOB2qCAlerGGAPFaaFP2f/GRCtPkN8+CsNc0trfdPzeGU9l/+mJw=",
       "auth": "X7iOQ30BmNZdTLWD8jeOOg=="
   }
};
var payload = 'Halo Sayangku!';
 
var options = {
   gcmAPIKey: '858559063539',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);