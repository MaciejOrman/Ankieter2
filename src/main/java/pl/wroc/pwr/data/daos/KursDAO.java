package pl.wroc.pwr.data.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.wroc.pwr.data.models.Kurs;

public interface KursDAO extends JpaRepository<Kurs, Long>{

}
