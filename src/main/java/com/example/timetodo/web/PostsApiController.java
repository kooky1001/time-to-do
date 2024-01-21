package com.example.timetodo.web;

import com.example.timetodo.service.posts.PostsService;
import com.example.timetodo.web.dto.PostsResponseDto;
import com.example.timetodo.web.dto.PostsSaveRequestDto;
import com.example.timetodo.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    @PostMapping("/api/v1/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    @PutMapping("/api/v1/posts/{id}")
    public Long update(@PathVariable("id") Long id, @RequestBody PostsUpdateRequestDto requestDtd) {
        return postsService.update(id, requestDtd);
    }

    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findById(@PathVariable("id") Long id) {
        return postsService.findById(id);
    }

    @DeleteMapping("/api/v1/posts/{id}")
    public Long delete(@PathVariable("id") Long id) {
        postsService.delete(id);
        return id;
    }
}
