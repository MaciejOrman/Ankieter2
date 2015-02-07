package pl.wroc.pwr.data.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.wroc.pwr.data.models.PlanowanieAnkietyzacji;

public interface PlanowanieAnkietyzacjiDAO extends JpaRepository<PlanowanieAnkietyzacji, Long> {

	

}