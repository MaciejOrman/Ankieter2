package pl.wroc.pwr.data.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.wroc.pwr.data.models.Pytanie;
import pl.wroc.pwr.data.models.SzablonAnkiety;

public interface PytanieDAO extends JpaRepository<Pytanie, Long>{

}
