package pl.wroc.pwr.data.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.wroc.pwr.data.models.Ankieta;

public interface AnkietowanyDAO extends JpaRepository<Ankieta, Long>{

}
