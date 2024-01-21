const index = {
    init: () => {
        // let _this = this;
        if (document.querySelector('#btn-save')) {
            document.querySelector('#btn-save').onclick = () => {
                // _this.save();
                index.save();
            }
        }
        if (document.querySelector('#btn-update')) {
            document.querySelector('#btn-update').onclick = () => {
                index.update();
            }
        }
        if (document.querySelector('#btn-delete')) {
            document.querySelector('#btn-delete').onclick = () => {
                index.delete();
            }
        }
    },
    save: () => {
        let data = {
            title: document.querySelector('#title').value,
            author: document.querySelector('#author').value,
            content: document.querySelector('#content').value
        }

        fetch('/api/v1/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            console.log(result);
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).catch(err => {
            alert(err);
        })
    },
    update: () => {
        let data = {
            title: document.querySelector('#title').value,
            content: document.querySelector('#content').value
        }
        let id = document.querySelector('#id').value;

        fetch(`/api/v1/posts/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            alert('글이 수정되었습니다.');
            window.location.href = '/';
        }).catch(err => {
            alert(err);
        })
    },
    delete: () => {
        let id = document.querySelector('#id').value;

        fetch(`/api/v1/posts/${id}`, {
            method: 'DELETE',
            header: {'Content-Type': 'application/json'}
        }).then(res => res.json()).then(result => {
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }).catch(err => {
            alert(err);
        })
    }
}

index.init();