package com.MemesRUs.services;

import com.MemesRUs.entities.Meme;
import com.MemesRUs.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by cameronoakley on 11/19/15.
 */
public interface MemeRepository extends CrudRepository<Meme, Integer> {
    Meme findOneByUser(User user);
}
