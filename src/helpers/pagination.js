exports.pagination = function (pageCurrent, totalPages, totalButtons) {
            if (pageCurrent > 0) {
                let text = '<ul class="pagination">'
                    if (pageCurrent == 1) {
                        text += '<li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>'
                    } else{
                        let prev = pageCurrent - 1
                        text += `<li class="waves-effect"><a href="/adaptador?page=${prev}"><i class="material-icons">chevron_left</i></a></li>`
                        text += '<li class="waves-effect"><a href="/adaptador?page=1>1</a></li>'
                    }

                    var i = (pageCurrent > 5) ? pageCurrent - 4 : 1
                    
                    if (i !== 1) {
                        text += '<li class="disabled"><a>...</a></li>'
                    }

                    for (; i <= (pageCurrent + 4) && i <= totalPages; i++) {
                        if (i == pageCurrent) {
                            text += `<li class="active blue lighten-1">
                                        <a>${i}</a>
                                    </li>`
                        }else { 
                            text += `<li class="waves-effect">
                                        <a href="/adaptador?page=${i}">${i}</a>
                                    </li>`
                        }

                        if (i == (pageCurrent + 4) && i < totalPages) {
                            text += '<li class="disabled"><a>...</a></li>'
                        }
                    }

                    if (pageCurrent == totalPages) {
                        text += '<li class="disabled"><a><i class="material-icons">chevron_right</i></a></li>'
                    }else {
                        let next = parseInt(pageCurrent) + 1
                        text += `<li class="waves-effect"><a href="/adaptador?page=${totalPages}>${totalPages}</a></li>`
                        text += `<li class="waves-effect"><a href="/adaptador?page=${next}"><i class="material-icons">chevron_right</i></a></li>`
                    }
                    
                text += "</ul>"
                return text
            }
        }