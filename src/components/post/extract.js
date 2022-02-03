export default function id(link){
    var video_id = link.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return "https://img.youtube.com/vi/" + video_id + "/maxresdefault.jpg"
}
