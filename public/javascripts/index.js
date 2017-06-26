$(function()){
	$(".del").click(function(e) {
        var target = $(e.target);
        var id = target.data("id");
        var div = $(".list-group-item.item-id-" + id);
        $.ajax({
                type:"DELETE",
                url:"/contact/delete?id=" + id
            })
            .done(function(results) {
                if(results.success === 1) {
                    if(div.length > 0) {
                        div.remove();
                    }
                }
            })
    });
}