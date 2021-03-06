package com.MemesRUs.services;

import com.MemesRUs.entities.Meme;
import com.MemesRUs.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.persistence.NamedQuery;


/**
 * Created by cameronoakley on 11/19/15.
 */
public interface MemeRepository extends PagingAndSortingRepository<Meme, Integer> {
    Page <Meme> findAllByUser(Pageable pageable, User user);
    Page <Meme> findAllByPopularityRating(Pageable pageable, User user);

    Page <Meme> findByIsBlank(Pageable pageable, boolean isBlank);
}
