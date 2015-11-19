package com.MemesRUs.services;

import com.MemesRUs.entities.Meme;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by cameronoakley on 11/19/15.
 */
public interface MemeRepository extends CrudRepository<Meme, Integer> {
}
